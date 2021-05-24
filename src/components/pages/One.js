import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const NavStyle = {
  background: "#7A78FF",
  fontFamily: "monospace",
  color: "offwhite",
  fontSize: 27,
  marginLeft: 720,
};

const One = () => (
  <>
    <h1>
      One stop Shop for all Your Saas Products <br /> All the Microservcies you
      need for a Fast Scale Deployment{" "}
    </h1>
    <Button color="inherit" style={NavStyle}>
      Exlpore
    </Button>
  </>
);

export default One;
