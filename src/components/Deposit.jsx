import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Deposit(props) {
  const [formData, setFormData] = useState({
    amount: "",
    transaction_type: 1,
    balance_after_transaction:
      props.api[props.api.length - 1].balance_after_transaction,
    timestamp: new Date(),
    account: 1,
    account_id: 1,
  });
  const navigate = useNavigate();

  function addData(event) {
    event.preventDefault();
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>;
    axios
      .post("http://127.0.0.1:8000/api/transactions/vfs_list/", formData)
      .then((res) => {});
  }

  return (
    <div style={{ textAlign: "center" }}>
      {console.log(props.api)}
      <Typography variant="h3" align="center" sx={{ m: 5 }}>
        Deposit Money to Your Account
      </Typography>
      <form onSubmit={addData}>
        <div style={{ marginBottom: "15px" }}>
          <TextField
            label="amount"
            value={formData.amount}
            name="amount"
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
                balance_after_transaction:
                  parseFloat(formData.balance_after_transaction) +
                  parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mr: 2 }}
          >
            OK
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              navigate("/transaction");
            }}
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}
