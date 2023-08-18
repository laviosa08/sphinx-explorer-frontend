import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../utils/api";
import { Box, CircularProgress, Container } from "@mui/material";
import { BoltRounded } from "@mui/icons-material";

type Props = {
  address: string;
  refresh: boolean;
};

const Balance: React.FC<Props> = ({ address, refresh }) => {
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBalance = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/api/balance/${address}`);
      setBalance(response.data.balance);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (address !== "") fetchBalance();
  }, [refresh]);

  return isLoading ? (
    <Box alignSelf="center" marginTop={2}>
      <CircularProgress />
    </Box>
  ) : balance ? (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      alignSelf={"center"}
      border="0.5px solid grey"
      padding={1}
      marginTop={2}
      borderRadius={2}
      bgcolor="#CAF1DE"
      maxWidth={window.innerWidth * 0.4}
    >
      <Typography>Wallet Balance </Typography>
      <Box width={100} />
      <Typography fontWeight={"bold"}>{balance} USDC</Typography>
    </Box>
  ) : (
    <Container />
  );
};

export default Balance;
