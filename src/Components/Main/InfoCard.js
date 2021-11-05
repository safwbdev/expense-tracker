import React from "react";
import {
  INFO_CARD_TRY,
  INFO_CARD_ADD,
  INFO_CARD_FOR,
  INFO_CARD_IN,
} from "../../constants/lang_eng";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div atyle={{ textAlign: "center", padding: "0 10px" }}>
      {INFO_CARD_TRY}
      <br />
      {INFO_CARD_ADD} {isIncome ? "Income" : "Expense"}
      {INFO_CARD_FOR}
      {isIncome ? "$100" : "$50"} {INFO_CARD_IN}{" "}
      {isIncome ? "Business" : "House"}
      {INFO_CARD_FOR}
      {isIncome ? "Monday" : "Tuesday"}
    </div>
  );
};

export default InfoCard;
