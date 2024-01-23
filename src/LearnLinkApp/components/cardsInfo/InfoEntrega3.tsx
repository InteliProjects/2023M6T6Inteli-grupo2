import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const InfoEntrega3 = memo(() => {
  return (
    <View style={styles.infoEntrega}>
      <View style={styles.infoBottom}>
        <View style={styles.previsao}>
          <Text style={[styles.ddmmaa, styles.h47Typo]}>DD/MM/AA</Text>
          <Text style={[styles.h47, styles.h47Typo]}>15h47</Text>
          <Text style={styles.s}>ás</Text>
          <Text style={[styles.dataHora, styles.escolaTypo1]}>
            Data / Hora de Entrega
          </Text>
        </View>
      </View>
      <View style={[styles.infoEntregaChild, styles.localPosition]} />
      <View style={[styles.local, styles.localPosition]}>
        <Text style={[styles.rJornalistaOseasContainer, styles.escolaTypo]}>
          R Jornalista Oseas Rosas, 110{`Trapiche da Barra `}
        </Text>
        <Text style={[styles.escolaNovaEscola, styles.escolaTypo]}>
          Escola Nova Escola
        </Text>
        <Text style={[styles.entregueEm, styles.escolaTypo]}>Entregue em</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  h47Typo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  escolaTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  localPosition: {
    left: 11,
    position: "absolute",
  },
  escolaTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  ddmmaa: {
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    top: 25,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  h47: {
    left: 86,
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    top: 25,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  s: {
    left: 66,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: 25,
    position: "absolute",
  },
  dataHora: {
    lineHeight: 21,
    color: Color.colorBlack,
    top: 0,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
    left: 0,
  },
  previsao: {
    width: "100%",
    left: 0,
    top: 0,
    height: 40,
    position: "absolute",
  },
  infoBottom: {
    top: 105,
    width: 302,
    height: 40,
    left: 11,
    position: "absolute",
  },
  infoEntregaChild: {
    top: 98,
    right: 12,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderTopWidth: 1,
    height: 1,
  },
  rJornalistaOseasContainer: {
    top: 46,
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
  },
  escolaNovaEscola: {
    top: 27,
    color: Color.verde1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.size_sm,
  },
  entregueEm: {
    lineHeight: 21,
    color: Color.colorBlack,
    top: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  local: {
    top: 7,
    width: 184,
    height: 76,
  },
  infoEntrega: {
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
    height: 168,
    marginTop: 20,
  },
});

export default InfoEntrega3;
