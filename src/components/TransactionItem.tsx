import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Transaction } from "../types/transaction";

type TransactionProps = {
  transaction: Transaction;
};

const TransactionItem: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <>
      <Card style={{ backgroundColor: "#E1F8DC" }}>
        <CardContent>
          <Typography>
            Hash:{" "}
            <a
              href={`https://etherscan.io/tx/${transaction.hash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {transaction.hash}
            </a>
          </Typography>
          <Typography>From: {transaction.from}</Typography>
          <Typography>To: {transaction.to}</Typography>
          <Typography>Value: {transaction.value} USDC</Typography>
        </CardContent>
      </Card>
      <br />
    </>
  );
};

export default TransactionItem;
