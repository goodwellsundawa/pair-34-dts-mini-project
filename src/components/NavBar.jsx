import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { auth, keluarDariApps } from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariApps();
    navigate("/login");
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    navigate("/login");
  };

  const buttonHomeOnClickHandler = () => {
    navigate("/home");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Movie Apps
          </Typography>

          {user ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome, user {user.email}
            </Typography>
          ) : (
            ""
          )}

          <Button color="inherit" onClick={buttonHomeOnClickHandler}>
            Home
          </Button>

          {user ? (
            <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={buttonLoginOrRegisterOnClickHandler}
            >
              Login/Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
