import { Grid, Typography } from "@material-ui/core";
import React from "react";
import loadingRocket from "../assets/loadingRocket.svg";
import "../assets/animation.css";

export default function LoadingComponent() {
  return (
    <Grid container justifyContent="center">
      <Typography variant="srOnly">Loading</Typography>
      <img
        aria-hidden="true"
        className="loading icon"
        src={loadingRocket}
        alt="loading"
      />
    </Grid>
  );
}
