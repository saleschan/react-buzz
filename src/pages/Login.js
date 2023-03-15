import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { defaultPath } from "../App";
import Layout from "../components/Layout";

const users = [
  {
    email: "a@a",
    senha: "1234",
    id: 0,
  },

  {
    email: "b@b",
    senha: "1234",
    id: 1,
  },
];

export default function Login() {
  const [matchUser, setMatchUser] = useState(true);

  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  const authUser = (e) => {
    users.forEach((i) => {
      if (i.email !== user.email && i.senha !== user.senha) {
        e.preventDefault();
      } else {
        setMatchUser(!matchUser);
      }
    });

    console.log('ENTREI NA FUNC');

    if (matchUser) {
      console.log("O estado de match user é: " + matchUser);
    } else {
      console.log("O estado de match user é: " + matchUser);
    }
  };

  return (
    <Layout>
      <form onSubmit={authUser} action={defaultPath + "/home"}>
        <Container
          sx={{
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "50%", minHeight: "80%" }}>
            <CardContent>
              <Box mb={10}>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography mb={1} variant="h3">
                    Login
                  </Typography>
                  <Avatar sx={{ backgroundColor: "#9400d3" }}>S</Avatar>
                </Container>
              </Box>
              <Box>
                <TextField
                  fullWidth
                  placeholder="Email"
                  type={"email"}
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  sx={{ marginTop: 2.5, marginBottom: 2.5 }}
                />

                <TextField
                  fullWidth
                  placeholder="Senha"
                  onChange={(e) =>
                    setUser({ ...user, senha: Number(e.target.value) })
                  }
                  type={"password"}
                  required
                />
              </Box>
              {!matchUser ? (
                <Typography
                  sx={{ color: "red", textAlign: "center", marginTop: "15px" }}
                >
                  O email ou senha não são válidos
                </Typography>
              ) : (
                ""
              )}
              <Button
                sx={{
                  marginTop: 2.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={e => console.log(e.target)}
                variant="contained"
                type="submit"
                color="secondary"
              >
                {/* <Link
                  to={defaultPath + "/home"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Entrar
                </Link> */}
                Entrar
              </Button>
            </CardContent>
          </Card>
          <Typography mt={2.5}>
            Não possui uma conta?
            <Link to={location.pathname + "/register"}> Sign up</Link>
          </Typography>
        </Container>
      </form>
    </Layout>
  );
}
