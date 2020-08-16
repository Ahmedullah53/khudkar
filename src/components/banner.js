import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  banner: {
    display: "flex",
    marginTop: theme.spacing(1),
    flexGrow: 1,
    width: "auto",
    height: "50vh",
    backgroundColor: "dodgerBlue",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      height: "60vh"
    }
  },
  bannerTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: "5%"
  },
  zeroSpace: {
    margin: "0",
    padding: "0"
  }
}));

export default function Banner(props) {
  const classes = useStyles();

  return (
    <Box className={classes.banner}>
      <Box className={classes.bannerTitle}>
        <h1 className={classes.zeroSpace}>{props.title}</h1>
        <p className={classes.zeroSpace}>{props.subText}</p>
      </Box>
    </Box>
  );
}
