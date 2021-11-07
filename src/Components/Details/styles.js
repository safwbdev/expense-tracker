import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  income: {
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  },
  expense: {
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  },
}));
