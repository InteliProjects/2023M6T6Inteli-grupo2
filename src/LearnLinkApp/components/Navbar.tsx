import React, { memo } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const Navbar = memo(() => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.navbar} onPress={() => navigation.goBack()}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <Image
        style={styles.bellicon}
        resizeMode="cover"
        source={require("../assets/bellicon.png")}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  logoIcon: {
    width: 56,
    height: 41,
  },
  bellicon: {
    width: 24,
    height: 24,
  },
  navbar: {
    alignSelf: "stretch",
    backgroundColor: Color.mainBg,
    borderStyle: "solid",
    borderColor: Color.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_6xs,
  },
});

export default Navbar;
