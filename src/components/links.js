import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(5),
      paddingLeft: 3,
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  //u can use map over to put all array in 1 link
  return (
    <>
      <Link href="/">First</Link>
      <Link href="/Home">HomePage</Link>
      <Link href="/Signup">Signup</Link>
    </>
  );
}
