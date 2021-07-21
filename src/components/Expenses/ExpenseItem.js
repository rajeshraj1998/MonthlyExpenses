import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../ui/Card";
import Grid from "@material-ui/core/Grid";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";
import EditExistingExpense from "./EditExistingExpense";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [editCheck, changeEditCheck] = useState(false);

  const delClickHandler = () => {
    props.delParOne(props.id);
  };

  const editClickHandler = () => {
    changeEditCheck((prevState) => !prevState);
  };

  const updateDetails = (data) => {
    props.editParOne(data);
  };

  return (
    <Card className="expense-item-container">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          
          <div className="expense-item__icons">{"$ " + props.amount}</div>
          </div>
          
          <div className="expense-item_icon_container">
        <div className="expense-item__icons ">
          <Grid item xs={8} onClick={delClickHandler}>
            <DeleteOutlinedIcon />
          </Grid>
        </div>

        <div className="expense-item__icons">
          <Grid item xs={8} onClick={editClickHandler}>
            <EditIcon />
          </Grid>
        </div>
        </div>
        </div>
     

      {editCheck && (
        <EditExistingExpense
          className="expense-item"
          data={props}
          closeEdit={editClickHandler}
          editParTwo={updateDetails}></EditExistingExpense>
      )}
    </Card>
  );
}

export default ExpenseItem;
