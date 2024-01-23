import React, { memo } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OrderEntregue = memo(({path}: {path: string}) => {
  const navigation = useNavigation();
  const telapath = path;

  return (
    <TouchableOpacity style={styles.orderEntregue} onPress={() => navigation.navigate(telapath as never)}>
      <View style={styles.info}>
        <View style={styles.parent}>
          <Text style={styles.text}>#00004</Text>
          <Text style={[styles.entregueNoDia, styles.entregueNoDiaTypo]}>
            Entregue no dia 25/10/2023
          </Text>
        </View>
        <View style={styles.parent}>
          <Text
            style={[styles.rJornalistaOseas, styles.entregueNoDiaTypo]}
          >{`R Jornalista Oseas Rosas, 110, Trapiche da Barra `}</Text>
        </View>
      </View>
      <Image
        style={styles.infoicon}
        resizeMode="cover"
        source={require("../../assets/infoicon.png")}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  entregueNoDiaTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
  },
  text: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  entregueNoDia: {
    fontFamily: FontFamily.interRegular,
    marginLeft: 8,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  parent: {
    flexDirection: "row",
  },
  rJornalistaOseas: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.darkerGrey,
  },
  info: {
    height: 32,
    justifyContent: "space-between",
  },
  infoicon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  orderEntregue: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingLeft: Padding.p_smi,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default OrderEntregue;
