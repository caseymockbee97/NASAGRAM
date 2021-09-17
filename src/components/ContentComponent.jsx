import React, { useState } from "react";
import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "94%",
    margin: "auto 3%",
    borderRadius: "5px",
  },
  textContainer: {
    width: "94%",
    margin: "5px 3%",
  },
}));

export default function ContentComponent(props) {
  const classes = useStyles(props);
  const [isLiked, setIsLiked] = useState(false);

  const { title, date, url, explanation, copyright } = props.post;

  return (
    <Grid item sm={12}>
      <Card style={{ maxWidth: "600px", margin: "0 auto" }} variant="outlined">
        <div className={classes.textContainer}>
          <Typography variant="h5" component="h2" align="center">
            {title}
          </Typography>
        </div>
        <img className={classes.image} src={url} alt="space" />
        <div className={classes.textContainer}>
          <Typography variant="caption">{explanation}</Typography>
          {copyright && (
            <Typography align="left" variant="body2">
              - {copyright}
            </Typography>
          )}
          <div>
            <IconButton
              aria-label={isLiked ? "unlike picture" : "like picture"}
              onClick={() => setIsLiked((prev) => !prev)}
            >
              {isLiked ? <FavoriteIcon color="primary" /> : <FavoriteIcon />}
            </IconButton>
            <Typography variant="caption">
              <Moment parse="YYYY-MM-DD" format="D MMM YYYY">
                {date}
              </Moment>
            </Typography>
          </div>
        </div>
      </Card>
    </Grid>
  );
}
