import React from "react";
import { Typography } from "@material-ui/core";
import {
  INFO_CARD_TRY,
  INFO_CARD_ADD,
  INFO_CARD_FOR,
  INFO_CARD_IN,
} from "../../constants/lang_eng";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{ lineHeight: "1.5em", marginTop: "20px" }}
    >
      {INFO_CARD_TRY}
      <br />
      <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
        "{INFO_CARD_ADD} {isIncome ? "Income" : "Expense"}
        {INFO_CARD_FOR}
        {isIncome ? "$100" : "$50"} {INFO_CARD_IN}{" "}
        {isIncome ? "Business" : "House"}
        {INFO_CARD_FOR}
        {isIncome ? "Monday" : "Tuesday"}""
      </span>
    </Typography>
  );
};

export default InfoCard;
