import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const PINCode = memo(() => {
  return (
    <View style={[styles.inserirPinParent, styles.inputFrameFlexBox]}>
      <Text style={styles.inserirPin}>Código de Entrega</Text>
      <View style={styles.pinCode}>
        <View style={[styles.inputFrame, styles.inputFrameFlexBox]}>
          <View style={styles.inputLayout} />
          <View style={[styles.inputElementPinSlot1, styles.inputLayout]} />
          <View style={[styles.inputElementPinSlot1, styles.inputLayout]} />
          <View style={[styles.inputElementPinSlot1, styles.inputLayout]} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputFrameFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputLayout: {
    justifyContent: "center",
    overflow: "hidden",
    height: 48,
    width: 48,
    borderWidth: 2,
    borderColor: Color.verde1,
    borderStyle: "solid",
    backgroundColor: Color.mainBg,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  inserirPin: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.contentContentPrimary,
    textAlign: "left",
  },
  inputElementPinSlot1: {
    marginLeft: 4,
  },
  inputFrame: {
    flexDirection: "row",
  },
  pinCode: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 9,
  },
  inserirPinParent: {
    marginTop: 20,
  },
});

export default PINCode;
