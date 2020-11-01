import { Drawer, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link, Switch } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import styled from "styled-components";
import Css from "../styles/Navbar.module.css";
import Logo from "../images/logo.png";
import { CgHomeAlt } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
const Options = styled.h1`
  font-size: 1rem;
  color: red;
  &:hover {
  }
`;

const Header = styled.h3`
  color: white;
  letter-spacing: 0.4em;
  background: pink;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const anchor = "left";
  return (
    <div>
      <AppBar position="relative" color="white">
        <Toolbar>
          <IconButton
            onClick={() => {
              handleOpen();
            }}
            align="left"
            style={{
              width: 100,
            }}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Switch>
            <Drawer variant="persistent" anchor={anchor} open={open}>
              <IconButton onClick={handleClose}>
                <ArrowBackIosIcon />
                Back
              </IconButton>

              <p>&nbsp;</p>
              <p></p>
              <div className={Css.Opt}>
                <Link to="/home">
                  <button
                    onClick={handleClose}
                    style={{
                      background: "inherit",
                      display: "flex",
                      color: "#574d68",
                    }}
                  >
                    {/* <HomeIcon /> */}
                    <CgHomeAlt size="2em" />
                    <Options style={{ marginLeft: "5px" }}>Home</Options>
                  </button>
                </Link>
              </div>
              {/* <p>&nbsp;</p> */}
              <div className={Css.Opt}>
                <Link to="/about">
                  <button
                    onClick={handleClose}
                    style={{
                      background: "inherit",
                      display: "flex",
                      color: "#574d68",
                    }}
                  >
                    <BsInfoCircle size="2em" />
                    <Options style={{ marginLeft: "5px" }}>Info</Options>
                  </button>
                </Link>
              </div>

              <p>&nbsp;</p>
              {/* <div>
                <Link to="/login">
                  <IconButton onClick={handleClose}>
                    <ExitToAppRoundedIcon />
                    Logout
                  </IconButton>
                </Link>
              </div> */}
            </Drawer>
          </Switch>
          <div className={Css.headerContainer}>
            <div className={Css.heading}>
              <Header>U_Table</Header>
            </div>
            <div className={Css.Rhead}>
              <div className={Css.logo}>
                <img src={Logo}></img>
              </div>
              <div className={Css.btnContainer}>
                <button className={Css.btn}>Login</button>
                <button className={Css.btn}>SignUp</button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
