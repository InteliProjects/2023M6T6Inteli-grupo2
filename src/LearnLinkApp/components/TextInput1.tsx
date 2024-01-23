import React, { memo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const TextInput1 = memo(() => {
  return (
    <TextInput
      style={styles.textInput}
      autoCapitalize="none"
      multiline={true}
    />
  );
});

const styles = StyleSheet.create({
  textInput: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.mainBg,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    padding: Padding.p_xs,
    marginTop: 8,
  },
});

export default TextInput1;