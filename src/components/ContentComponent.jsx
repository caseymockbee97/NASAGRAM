import React, { useState } from "react";
import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkIcon from "@material-ui/icons/Link";
import Moment from "react-moment";
import copy from "copy-to-clipboard";

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
  card: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  copied: {
    color: theme.palette.secondary,
  },
}));

export default function ContentComponent(props) {
  const classes = useStyles(props);
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const { title, date, url, explanation, copyright } = props.post;

  const copyToClipboard = (url) => {
    copy(url, {
      onCopy: setIsCopied(true),
    });
  };

  return (
    <Grid item sm={12}>
      <Card className={classes.card} variant="outlined">
        <div className={classes.textContainer}>
          <Typography variant="h5" component="h2" align="center">
            {title}
          </Typography>
        </div>
        <img className={classes.image} src={url} alt="space" />
        <div className={classes.textContainer}>
          <Typography variant="caption" component="p">
            {explanation}
          </Typography>
          {copyright && (
            <Typography align="left" variant="body2">
              - {copyright}
            </Typography>
          )}
          <div>
            <Tooltip
              title={isLiked ? "Unlike Picture" : "Like Picture"}
              arrow
              enterDelay={500}
              leaveDelay={100}
            >
              <IconButton
                aria-label={isLiked ? "unlike picture" : "like picture"}
                onClick={() => setIsLiked((prev) => !prev)}
              >
                {isLiked ? <FavoriteIcon color="primary" /> : <FavoriteIcon />}
              </IconButton>
            </Tooltip>
            <Typography variant="caption">
              <Moment parse="YYYY-MM-DD" format="D MMM YYYY">
                {date}
              </Moment>
            </Typography>
            <Tooltip
              title="Copy to clipboard"
              arrow
              enterDelay={500}
              leaveDelay={100}
            >
              <IconButton
                onClick={() => copyToClipboard(url)}
                aria-label={"copy link to photo"}
              >
                <LinkIcon color="secondary" />
              </IconButton>
            </Tooltip>

            {isCopied && (
              <Typography color="secondary" variant="caption">
                copied
              </Typography>
            )}
          </div>
        </div>
      </Card>
    </Grid>
  );
}
