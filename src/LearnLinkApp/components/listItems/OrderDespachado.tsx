import React, { memo } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OrderDespachado = memo(({path}: {path: string}) => {
  const navigation = useNavigation();
  const telapath = path;

  return (
    <TouchableOpacity style={styles.orderDespachado} onPress={() => navigation.navigate(telapath as never)}>
      <Image
        style={[styles.iconInfo, styles.iconInfoPosition]}
        resizeMode="cover"
        source={require("../../assets/infoicon.png")}
      />
      <View style={styles.info}>
        <View style={[styles.statusEmPreparaoWrapper, styles.wrapperPosition]}>
          <Text style={[styles.statusEmPreparaoContainer, styles.textPosition]}>
            <Text style={styles.status}>{`Status: `}</Text>
            <Text style={styles.despachado}>Despachado</Text>
          </Text>
        </View>
        <View
          style={[
            styles.rJornalistaOseasRosas110Wrapper,
            styles.wrapperPosition,
          ]}
        >
          <Text
            style={[styles.rJornalistaOseas, styles.rJornalistaOseasTypo]}
          >{`R Jornalista Oseas Rosas, 110, Trapiche da Barra `}</Text>
        </View>
        <View style={[styles.emitidoEm25102023Parent, styles.wrapperPosition]}>
          <Text style={[styles.emitidoEm25102023, styles.rJornalistaOseasTypo]}>
            Emitido em 25/10/2023
          </Text>
          <Text style={[styles.text, styles.textPosition]}>#00003</Text>
          <Image
            style={[styles.frameChild, styles.iconInfoPosition]}
            resizeMode="cover"
            source={require("../../assets/ellipse-1.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  iconInfoPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  wrapperPosition: {
    left: 13,
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
    color: Color.colorBlack,
    top: "0%",
    position: "absolute",
  },
  rJornalistaOseasTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
    position: "absolute",
  },
  iconInfo: {
    top: 16,
    right: 0,
    width: 18,
    height: 18,
  },
  status: {
    fontFamily: FontFamily.interRegular,
  },
  despachado: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  statusEmPreparaoContainer: {
    height: "100%",
    fontSize: FontSize.size_5xs,
    left: "0%",
    width: "100%",
    lineHeight: 15,
    letterSpacing: 0,
  },
  statusEmPreparaoWrapper: {
    top: 32,
    width: 123,
    height: 14,
  },
  rJornalistaOseas: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.darkerGrey,
    left: "0%",
    fontSize: FontSize.size_3xs,
    top: "0%",
    width: "100%",
  },
  rJornalistaOseasRosas110Wrapper: {
    top: 19,
    width: 270,
    height: 15,
  },
  emitidoEm25102023: {
    top: "6.25%",
    left: "42.86%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  text: {
    left: "9.89%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  frameChild: {
    height: "75%",
    width: "6.59%",
    top: "12.5%",
    right: "93.41%",
    bottom: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
  },
  emitidoEm25102023Parent: {
    top: 2,
    width: 182,
    height: 16,
  },
  info: {
    top: 0,
    left: 0,
    width: 283,
    position: "absolute",
    height: 50,
  },
  orderDespachado: {
    width: "100%",
    height: 50,
  },
});

export default OrderDespachado;
