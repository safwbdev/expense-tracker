import React, { useRef, useEffect } from "react";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import useStyles from "./styles";
import CustomAppBar from "./components/Appbar/Appbar";
import BottomNav from "./components/BottomNav/BottomNav";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);
  const incomeRef = useRef(null);
  const expenseRef = useRef(null);
  const executeScrollToIncome = () => incomeRef.current.scrollIntoView();
  const executeScrollToExpense = () => expenseRef.current.scrollIntoView();
  const executeScroll = () => main.current.scrollIntoView();
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <>
      <CustomAppBar />
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main} ref={main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop} ref={incomeRef}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last} ref={expenseRef}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
      <BottomNav
        executeScrollToIncome={executeScrollToIncome}
        executeScrollToExpense={executeScrollToExpense}
      />
    </>
  );
};

export default App;
