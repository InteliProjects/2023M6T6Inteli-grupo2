import React, { useState } from "react";
import { Text, View } from "react-native";
export function Register() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Register</Text>
    </View>
  );
}
