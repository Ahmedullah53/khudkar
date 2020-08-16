import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "dodgerBlue",
    width: "auto",
    height: "auto",
    marginTop: theme.spacing(1),
    color: "white"
  },
  social: {
    display: "flex"
  },
  footerBtn: {
    display: "flex",
    justifyContent: "center"
  },
  desktopIcon: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  mobileIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      alignContent: "center",
      justifyContent: "center"
    }
  },
  flex: {
    display: "flex",
    width: "100%",
    alignContent: "center",
    justifyContent: "center"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.social}>
        <div className={classes.desktopIcon}>
          <div className={classes.flex}>
            <p>
              <span>&copy;</span> khudkar.inc
            </p>
          </div>
          <div className={classes.flex}>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <RedditIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <PinterestIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
          </div>
          <div className={classes.flex}>
            <Button className={classes.footerBtn} color="inherit">
              Contact Us
            </Button>
          </div>
        </div>
        <div className={classes.mobileIcon}>
          <div className={classes.flex}>
            <p>
              <span>&copy;</span> khudkar.inc
            </p>
          </div>
          <div className={classes.flex}>
            <FacebookIcon fontSize="default" />
            <InstagramIcon fontSize="default" />
            <RedditIcon fontSize="default" />
            <WhatsAppIcon fontSize="default" />
            <TwitterIcon fontSize="default" />
            <PinterestIcon fontSize="default" />
            <YouTubeIcon fontSize="default" />
            <GitHubIcon fontSize="default" />
          </div>
          <div className={classes.flex}>
            <Button className={classes.footerBtn} color="inherit">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
