import React, { memo } from "react";
import { Button } from "@rneui/themed";
import { StyleSheet } from "react-native";

const WFButton = memo(() => {
  return (
    <Button
      title="Confirmar"
      radius={5}
      iconPosition="left"
      disabled={false}
      type="solid"
      color="#2d3648"
      titleStyle={styles.wFButtonBtn}
      containerStyle={styles.wFButtonBtn1}
      buttonStyle={styles.wFButtonBtn2}
    />
  );
});

const styles = StyleSheet.create({
  wFButtonBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  wFButtonBtn1: {
    // left: 17,
    // right: 18,
    // bottom: 26,
    width: "100%",
    // position: "absolute",
    marginTop: 20,
  },
  wFButtonBtn2: {
    borderRadius: 6,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default WFButton;
