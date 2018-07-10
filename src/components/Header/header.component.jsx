import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./header.css";
import logoutIcon from "../../assets/icons/logoutIcon.png";
import profileIcon from "../../assets/icons/profileIcon.png";

const styles = {
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    right: 0,
    left: "16.7%",
    bottom: "90.3%",
    background: "rgb(10, 33, 62)"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    outline: "none"
  },
  listIconStyle: {
    width: "23px"
  },
  usernameTextStyle: {
    marginLeft: "-11%",
    marginTop: "-11%"
  }
};

const Header = props => {
  const {
    classes,
    anchorEl,
    menuFunc,
    menuDropdownFunc,
    openDropDownFunc,
    loggedInUser
  } = props;
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "rgb(10, 33, 62)" }}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon onClick={menuFunc} />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {""}
          </Typography>
          <div>
            <IconButton
              aria-owns={open ? "menu-appbar" : null}
              aria-haspopup="true"
              onClick={menuDropdownFunc}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <h6 className={classes.usernameTextStyle}>{loggedInUser}</h6>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              className="menu-item"
            >
              <MenuItem onClick={() => openDropDownFunc("profile", anchorEl)}>
                <img
                  src={profileIcon}
                  alt="profile"
                  className={classes.listIconStyle}
                />
                Profile
              </MenuItem>
              <MenuItem onClick={() => openDropDownFunc("logout", anchorEl)}>
                <img
                  src={logoutIcon}
                  alt="logout"
                  className={classes.listIconStyle}
                />
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  openDropDownFunc: PropTypes.func.isRequired,
  menuFunc: PropTypes.func.isRequired,
  menuDropdownFunc: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
