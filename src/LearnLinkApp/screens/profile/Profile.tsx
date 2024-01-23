import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
export function Profile() {
  const navigation = useNavigation();

  return (
    <View style = {styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',

    fontSize: 20,
    textAlign: 'center',
  },
  coffText: {
    color: '#550AB1',
    fontWeight: 'bold',
  },
});