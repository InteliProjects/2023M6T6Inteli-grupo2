import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const MainTitle = memo(({ title, count = null }: { title: string; count?: string | null }) => {
  return (
    <View style={styles.maintitle}>
      <Text style={styles.titletext}>{title}</Text>
      <Text style={styles.titlenumber}>{count}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  titletext: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  titlenumber: {
    fontSize: FontSize.size_5xl,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.verde1,
    textAlign: "right",
  },
  maintitle: {
    width: 360,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
  },
});

export default MainTitle;
