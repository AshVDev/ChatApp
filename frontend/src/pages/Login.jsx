import { Button, Container, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: flex,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
              <Typography>Or</Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="secondary"
                onClick={() => setIsLogin(false)}
              >
                Register
              </Button>
            </form>
          </>
        ) : (
          <span>register</span>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
