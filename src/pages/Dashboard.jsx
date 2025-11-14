import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Button, Typography, Container } from "@mui/material";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mt={5}>Dashboard</Typography>
      <Typography mt={2}>Welcome! You are logged in.</Typography>
      <Button variant="contained" color="secondary" onClick={logout} sx={{ mt: 2 }}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
