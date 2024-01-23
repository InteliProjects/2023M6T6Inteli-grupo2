import React, { ReactNode, createContext, useState } from "react";
import { authService } from "../services/AuthService";
import { Alert } from "react-native";

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [authData, setAuthData] = useState<AuthData>();

  async function signIn(email: string, password: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, password);
      setAuthData(auth);
      return auth;
    } catch (error) {
      // alert para dispositivo IOS
   Alert.alert(error.message, 'tente novamente')
    }
  }

  async function signOut(): Promise<void> {
    setAuthData(undefined);

    return;
  }
  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


