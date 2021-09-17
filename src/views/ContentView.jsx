import {
  Container,
  Grid,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import ContentComponent from "../components/ContentComponent";
import { useStore } from "../store/store";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "25px",
  },
}));
export default function ContentView() {
  const classes = useStyles();

  const isLoading = useStore((state) => state.isLoading);
  const APODs = useStore((state) => state.APODs);
  const fetchAPODs = useStore((state) => state.fetchAPODs);
  const fetchMoreAPODs = useStore((state) => state.fetchMoreAPODs);
  const isLoadingMore = useStore((state) => state.isLoadingMore);

  useEffect(() => {
    fetchAPODs();
  }, [fetchAPODs]);

  return (
    <Container className={classes.container}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {isLoading && (
          <Grid item sm={12}>
            <Typography align="center">Loading</Typography>
          </Grid>
        )}

        {APODs &&
          APODs.map((post, i) => (
            <ContentComponent key={post.url} post={post} />
          ))}
        {isLoadingMore && (
          <Grid item sm={12}>
            <Typography align="center">Loading More</Typography>
          </Grid>
        )}
        {!isLoadingMore && !isLoading && (
          <Button variant="outlined" onClick={fetchMoreAPODs}>
            Load More
          </Button>
        )}
      </Grid>
    </Container>
  );
}
