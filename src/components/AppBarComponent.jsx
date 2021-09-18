import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
  appBar: {
    background: theme.background,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
export default function AppBarComponent() {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar color="inherit" className={classes.appBar}>
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
    </HideOnScroll>
  );
}
