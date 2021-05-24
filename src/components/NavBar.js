import AppBar from "@material-ui/core/AppBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import CustomizedMenus from "./DropMenu";
import links from "./links";
import Home from "./pages/Home";

const NavBar = () => {
  const classes = { display: "flex", alignItems: "baseline" };
  const style = {
    background: "#301934",
    fontFamily: "monospace",
  };
  const NavStyle = {
    background: "#301934",
    fontFamily: "monospace",
    fontSize: 27,
  };

  return (
    <>
      <Router>
        <AppBar position="static" style={style}>
          <Toolbar>
            <IconButton
              edge="start"
              className={style}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <CustomizedMenus />

            <Button color="inherit" style={NavStyle} href="/home">
              Home
            </Button>

            <Button color="inherit" style={NavStyle} href="/Signup">
              Signup
            </Button>
            <Button color="inherit" style={NavStyle} href="/Signin">
              Signin
            </Button>
            <Button color="inherit" style={NavStyle} href="/Contact">
              Contact
            </Button>
            <Button color="inherit" style={NavStyle} href="/Faq">
              Faq
            </Button>
          </Toolbar>
        </AppBar>
      </Router>
    </>
  );
};

export default NavBar;
