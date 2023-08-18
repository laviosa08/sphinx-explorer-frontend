import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Box, TextField } from "@mui/material";
import TransactionList from "../components/TransactionList";
import Balance from "../components/Balance";

const Explorer: React.FC = () => {
  const [address, setAddress] = useState("");
  const [refresh, setRefresh] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="center"
      maxWidth={window.outerWidth * 0.6}
    >
      <Header />
      <Box display="flex" flexDirection="column" paddingTop={4}>
        <TextField
          label="Search Address"
          placeholder="0x..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Box height={20} />

        <Button
          variant="contained"
          onClick={() => setRefresh(!refresh)}
          style={{ maxWidth: "500px", alignSelf: "center" }}
        >
          Search Address
        </Button>
      </Box>
      <Box height={20} />
      <Balance address={address} refresh={refresh} />
      <TransactionList address={address} refresh={refresh} />
    </Box>
  );
};

export default Explorer;
