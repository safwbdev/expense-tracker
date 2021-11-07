import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      background: "none",
    },
  },
  totalBalance: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      color: "#ffffff",
      fontSize: "40px",
      marginTop: "20%",
      "& .MuiCardHeader-title": {
        fontSize: "1em",
      },
      "& .MuiTypography-colorTextSecondary": {
        color: "#ffffff",
      },
    },
  },
  innerCard: {
    borderRadius: "20px 20px 0 0",
  },
  list: {
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
}));
