import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
} from "@material-ui/core";

import {
  MoneyOff,
  AttachMoney,
  // AccountBalance
} from "@material-ui/icons";
import useStyles from "./styles";

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        label="Income"
        icon={
          <Avatar className={classes.avatarIncome}>
            <AttachMoney />
          </Avatar>
        }
      />

      <BottomNavigationAction
      // label="Balance"
      // icon={
      //   <Avatar>
      //     <AccountBalance />
      //   </Avatar>
      // }
      />
      <BottomNavigationAction
        label="Expenses"
        icon={
          <Avatar className={classes.avatarExpense}>
            <MoneyOff />
          </Avatar>
        }
      />
    </BottomNavigation>
  );
}
