import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  scrollToTop: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
}));

export default function ScrollToTopComponent() {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleButton = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleButton);
    return () => {
      window.removeEventListener("scroll", toggleButton);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <Tooltip title="Scroll to top" arrow enterDelay={500} leaveDelay={100}>
          <IconButton
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className={classes.scrollToTop}
          >
            <ArrowUpward color="primary" fontSize="large" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
