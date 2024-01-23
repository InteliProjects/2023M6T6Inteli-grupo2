import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export function UseAuth() {
    const authContext = useContext(AuthContext);
    return authContext;
  }