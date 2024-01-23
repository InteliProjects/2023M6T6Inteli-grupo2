import React, { memo } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PedidoAvaliado = memo(() => {
  return (
    <View style={styles.avaliation}>
      <Text style={styles.avalieOPedido}>
        Pedido Avaliado
      </Text>  
      <View style={styles.avaliationChild} />
      <View style={styles.starRating}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/green-star.png")}
        />
        <Image
          style={[styles.iconInfo1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/green-star.png")}
        />
        <Image
          style={[styles.iconInfo1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/green-star.png")}
        />
        <Image
          style={[styles.iconInfo1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/green-star.png")}
        />
        <Image
          style={[styles.iconInfo1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconinfo.png")}
        />
        
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  iconLayout: {
    // overflow: "hidden",
    height: 18,
    width: 18,
  },
  iconInfo1: {
    marginLeft: 10,
  },
  starRating: {
    // right: -313,
    // bottom: 19,
    // left: 318,
    flexDirection: "row",
    alignItems: "center",
    // transform: [
    //   {
    //     rotate: "180deg",
    //   },
    // ],
    justifyContent: "center",
    // position: "absolute",
    width: "100%",
    // backgroundColor: "red",
    flex: 1,
  },
  avaliationChild: {
    // top: "50%",
    borderStyle: "solid",
    borderColor: Color.verde1,
    borderTopWidth: 1,
    height: 1,
    width: "100%",
    marginTop: 20,
  },
  avalieOPedido: {
    top: 7,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.verde1,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    width: 297,
    height: 28,
    justifyContent: "center",
  },
  avaliation: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.mainBg,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 100,
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 15,
    width: "100%",
    borderWidth: 2,
    borderColor: Color.verde1,
  },
});

export default PedidoAvaliado;
