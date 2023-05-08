import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ error }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <img
          src="/images/auth-logo.png"
          alt="Error"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <h1>An error occurred</h1>
        <p>{error}</p>
        <p>Please!! login again </p>
        <Button
          onClick={() => {
            window.location.replace("/login");
            localStorage.clear();
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
