import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";
import useStyles from "./styles";
import InfoCard from "./InfoCard";
import {
  // APP_TITLE,
  // APP_SUBTITLE,
  TOTAL_BALANCE,
} from "../../constants/lang_eng";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={`$${balance}`}
          subheader={TOTAL_BALANCE}
          className={classes.totalBalance}
        />
        <Card className={classes.innerCard}>
          <CardContent>
            <Typography
              variant="body2"
              align="center"
              style={{ lineHeight: "1.5em", marginTop: "20px" }}
            >
              <InfoCard />
            </Typography>
            <Divider className={classes.divider} />
            <Form />
          </CardContent>
          <Card className={classes.list}>
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <List />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default Main;
