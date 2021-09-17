import { CssBaseline, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "./components/AppBarComponent";
import ContentView from "./views/ContentView";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.background,
    width: "100vw",
    height: "100vh",
    position: "fixed",
    overflow: "scroll",
  },
  headerImage: {
    maxWidth: "300px",
  },
  toolbar: {
    marginTop: "5px",
    marginBottom: "5px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <AppBarComponent />
      <Toolbar className={classes.toolbar} />
      <ContentView />
    </div>
  );
}

export default App;
