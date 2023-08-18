import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../utils/api";
import { Transaction } from "../types/transaction";
import TransactionItem from "./TransactionItem";
import { Box, CircularProgress, Container } from "@mui/material";

type Props = {
  address: string;
  refresh: boolean;
};

const TransactionList: React.FC<Props> = ({ address, refresh }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${BASE_URL}/api/transactions/${address}`
      );
      console.log(response.data);
      setTransactions(response.data.transactions);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (address !== "") {
      fetchTransactions();
    }
  }, [refresh]);

  return isLoading ? (
    <Box alignSelf="center" marginTop={2}>
      <CircularProgress />
    </Box>
  ) : transactions.length > 0 ? (
    <Box marginTop={4}>
      <Typography variant="h6">Your Transactions</Typography>
      <Box height={20} />
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </Box>
  ) : (
    <Container />
  );
};

export default TransactionList;
