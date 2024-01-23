import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../../GlobalStyles";

const DetalhesEntregaT = memo(() => {
  return (
    <View style={styles.detalhesEntregaT}>
      <Text style={styles.detalhesDaEntrega}>Detalhes da Entrega</Text>
      <View style={styles.frameParent}>
        <View style={styles.transportadoraParent}>
          <Text style={[styles.transportadora, styles.contatoTypo]}>
            Transportadora
          </Text>
          <Text style={[styles.nomeDaTransportadora, styles.textTypo]}>
            Nome da Transportadora
          </Text>
        </View>
        <View style={styles.contatoParent}>
          <Text style={[styles.contato, styles.contatoTypo]}>Contato:</Text>
          <View style={styles.iconPhoneParent}>
            <Image
              style={styles.iconPhone}
              resizeMode="cover"
              source={require("../../assets/iconphone.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>
              +55 (11) 95655-1907
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  contatoTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
  },
  detalhesDaEntrega: {
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  transportadora: {
    color: Color.colorBlack,
    fontWeight: "600",
    lineHeight: 15,
  },
  nomeDaTransportadora: {
    marginTop: 5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  transportadoraParent: {
    alignSelf: "stretch",
  },
  contato: {
    color: Color.verde1,
  },
  iconPhone: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_xs,
    marginLeft: 6,
  },
  iconPhoneParent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  contatoParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  detalhesEntregaT: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.mainBg,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_2xs,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_3xs,
    marginTop: 20,
    // overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default DetalhesEntregaT;
