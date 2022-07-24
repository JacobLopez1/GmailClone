import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (formData) => {
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    dispatch(closeSendMessage());
  };

  const registerOptions = {
    to: { required: "To is required" },
    subject: { required: "Subject is required" },
    message: { required: "Message is required" },
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", registerOptions.to)}
        />
        <p className="error__message">{errors?.to && errors.to.message}</p>
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", registerOptions.subject)}
        />
        <p className="error__message">
          {errors?.subject && errors.subject.message}
        </p>
        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", registerOptions.message)}
        />
        <p className="error__message">
          {errors?.message && errors.message.message}
        </p>
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
