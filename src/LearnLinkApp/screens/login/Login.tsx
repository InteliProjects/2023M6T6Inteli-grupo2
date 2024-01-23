import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { UseAuth } from "../../hooks/useAuth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-community/google-signin";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UseAuth();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'SEU_CLIENT_ID',
      offlineAccess: true,
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // O usuário cancelou o processo de login.
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Um processo de login já está em andamento.
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Serviços do Google Play não disponíveis ou desatualizados.
      } else {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="e-mail" value={email} onChangeText={setEmail} />
      <Input
        secureTextEntry
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar no app" onPress={() => signIn(email, password)} />

      <GoogleSigninButton
        style={{ width: 192, height: 48, marginTop: 10 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signInWithGoogle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
