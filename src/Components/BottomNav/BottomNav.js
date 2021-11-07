import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
} from "@material-ui/core";

import { MoneyOff, AttachMoney } from "@material-ui/icons";
import useStyles from "./styles";

const SimpleBottomNavigation = ({
  executeScrollToIncome,
  executeScrollToExpense,
}) => {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        label="Income"
        onClick={executeScrollToIncome}
        icon={
          <Avatar className={classes.avatarIncome}>
            <AttachMoney />
          </Avatar>
        }
      />

      <BottomNavigationAction />
      <BottomNavigationAction
        label="Expenses"
        onClick={executeScrollToExpense}
        icon={
          <Avatar className={classes.avatarExpense}>
            <MoneyOff />
          </Avatar>
        }
      />
    </BottomNavigation>
  );
};
export default SimpleBottomNavigation;
