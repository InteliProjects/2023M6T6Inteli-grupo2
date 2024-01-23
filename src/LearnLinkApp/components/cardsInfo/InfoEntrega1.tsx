import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const InfoEntrega1 = memo(() => {
  return (
    <View style={styles.infoEntrega}>
      <View style={styles.local}>
        <Text style={[styles.rJornalistaOseasContainer, styles.escolaTypo]}>
          R Jornalista Oseas Rosas, 110{`Trapiche da Barra `}
        </Text>
        <Text style={[styles.escolaNovaEscola, styles.escolaTypo]}>
          Escola Nova Escola
        </Text>
        <Text style={[styles.entregaEm, styles.escolaTypo]}>Entrega em</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  escolaTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  rJornalistaOseasContainer: {
    top: 46,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.darkerGrey,
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  escolaNovaEscola: {
    top: 27,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.verde1,
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  entregaEm: {
    top: 0,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  local: {
    top: 7,
    left: 11,
    width: 184,
    height: 76,
    position: "absolute",
  },
  infoEntrega: {
    alignSelf: "stretch",
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
    height: 97,
    marginTop: 20,
  },
});

export default InfoEntrega1;
