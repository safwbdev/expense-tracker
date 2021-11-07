import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  income: {
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      // borderRadius: "0px",
      margin: "20px",
    },
  },
  expense: {
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
      // borderRadius: "0px",
    },
  },
}));
