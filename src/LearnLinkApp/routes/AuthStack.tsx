import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../screens/login/Login";
import { Register } from "../screens/register/Register";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
