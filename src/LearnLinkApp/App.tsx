import React from "react";
import { Router } from "./routes/Router";
import { AuthProvider } from "./contexts/Auth";
import TelaTemplate from "./screens/TelaTemplate";
import TelaTemplate3 from "./screens/TelaTemplate3";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}