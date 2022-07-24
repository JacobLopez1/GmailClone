import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <IconButton>
        <TuneIcon />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut}/>
      </div>
    </div>
  );
};

export default Header;
