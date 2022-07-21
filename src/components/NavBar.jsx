import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { auth, keluarDariApps } from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { useDispatch } from "react-redux";

import { searchMoviesAsync } from "../features/movies/sliceMovies.js";

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const dispatcher = useDispatch();

  const [valSearch, setValSearch] = useState("");

  const searchOnChangeHandler = (event) => {
    setValSearch(event.target.value);
  };

  const buttonSearchOnClickHandler = () => {
    if (valSearch !== "") {
      dispatcher(searchMoviesAsync(valSearch));
      navigate("/custom");
    }
  };

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

          <TextField
            label="Search"
            variant="filled"
            size="small"
            color="primary"
            sx={{ backgroundColor: "#fff" }}
            value={valSearch}
            onChange={searchOnChangeHandler}
          />
          <Button color="inherit" onClick={buttonSearchOnClickHandler}>
            Search
          </Button>

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
