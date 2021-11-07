import { makeStyles } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    display: "none",
    position: "fixed",
    bottom: "0",
    padding: "5px 0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
}));
