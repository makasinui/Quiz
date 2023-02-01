import "../styles/layout.scss";

import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const Layout: React.FC = () => (
  <main>
    <Header />

    <Container className="content" sx={{ padding: "70px 0" }} maxWidth="xl">
      <Box>
        <Outlet />
      </Box>
    </Container>
  </main>
);
