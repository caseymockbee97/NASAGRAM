import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

import SPACETAGRAM_HEADER from "../assets/SPACETAGRAM_HEADER.svg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "5px",
    marginBottom: "5px",
  },
  headerImage: {
    maxWidth: "300px",
  },
}));

export default function AppBarComponent() {
  const classes = useStyles();
  return (
    <AppBar color="transparent" position="absolute">
      <Toolbar className={classes.toolbar}>
        <img
          src={SPACETAGRAM_HEADER}
          className={classes.headerImage}
          alt="Spacetagram in gradient colors"
          aria-hidden="true"
        />
        <Typography variant="srOnly" component="h1">
          SPACETAGRAM
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
