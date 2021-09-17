import { CssBaseline, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "./components/AppBarComponent";
import ScrollToTopComponent from "./components/ScrollToTopComponent";
import ContentView from "./views/ContentView";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.background,
    minHeight: "100vh",
    minWidth: "100vw",
  },
  headerImage: {
    maxWidth: "300px",
  },
  toolbar: {
    marginBottom: "5px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div id="main-container" className={classes.mainContainer}>
      <CssBaseline />
      <AppBarComponent />
      <Toolbar className={classes.toolbar} />
      <ContentView />
      <ScrollToTopComponent />
    </div>
  );
}

export default App;
