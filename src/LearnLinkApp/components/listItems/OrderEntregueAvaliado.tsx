import React, { memo } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OrderEntregueAvaliado = memo(({path}: {path: string}) => {
  const navigation = useNavigation();
  const telapath = path;

  return (
    <TouchableOpacity style={styles.orderEntregueAvaliado} onPress={() => navigation.navigate(telapath as never)}>
      <Image
        style={styles.iconInfo}
        resizeMode="cover"
        source={require("../../assets/iconinfo1.png")}
      />
      <View style={styles.info}>
        <View style={[styles.statusEmPreparaoWrapper, styles.wrapperPosition]}>
          <Text
            style={[styles.statusEmPreparao, styles.statusEmPreparaoPosition]}
          >
            Avaliado
          </Text>
        </View>
        <View
          style={[
            styles.rJornalistaOseasRosas110Wrapper,
            styles.wrapperPosition,
          ]}
        >
          <Text
            style={[styles.rJornalistaOseas, styles.statusEmPreparaoPosition]}
          >{`R Jornalista Oseas Rosas, 110, Trapiche da Barra `}</Text>
        </View>
        <View style={[styles.parent, styles.wrapperPosition]}>
          <Text style={[styles.text, styles.textClr]}>#00006</Text>
          <Text style={[styles.entregueNoDia, styles.textClr]}>
            Entregue no dia 25/10/2023
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 13,
    position: "absolute",
  },
  statusEmPreparaoPosition: {
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
  },
  iconInfo: {
    top: 16,
    right: 0,
    width: 18,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  statusEmPreparao: {
    height: "100%",
    fontSize: FontSize.size_5xs,
    color: "#10a51f",
    fontFamily: FontFamily.interRegular,
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
    fontSize: FontSize.size_3xs,
  },
  rJornalistaOseasRosas110Wrapper: {
    top: 19,
    width: 270,
    height: 15,
  },
  text: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  entregueNoDia: {
    marginLeft: 8,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  parent: {
    top: 2,
    flexDirection: "row",
  },
  info: {
    top: 0,
    left: 0,
    width: 283,
    position: "absolute",
    height: 50,
  },
  orderEntregueAvaliado: {
    width: "100%",
    height: 50,
  },
});

export default OrderEntregueAvaliado;
