import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
import "./spinner.scss";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "50%",
//     "& > * + *": {
//       marginTop: theme.spacing(2)
//     },
//     marginLeft: theme.spacing(50)
//   }
// }));

export default function Spinner() {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    <div className="spinner_container">
      <div className="spinner">
        <span>...loading</span>
      </div>
    </div>

    // <span id="text">Loading...</span>
  );
}
