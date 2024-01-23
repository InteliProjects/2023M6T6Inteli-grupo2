import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const InfoEntrega2 = memo(() => {
  return (
    <View style={styles.infoEntrega}>
      <View style={[styles.infoBottom, styles.infoPosition]}>
        <View>
          <Text style={[styles.previsoDeEntrega, styles.textTypo1]}>
            Previsão de entrega
          </Text>
          <Text style={[styles.ddmmaa, styles.textTypo]}>DD/MM/AA</Text>
        </View>
        <Image
          style={styles.infoBottomChild}
          resizeMode="cover"
          source={require("../../assets/line-5.png")}
        />
        <View style={styles.codigoRastreio}>
          <Text style={[styles.previsoDeEntrega, styles.textTypo1]}>
            Código de Rastreamento
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>4436017</Text>
            <Text style={[styles.copiar, styles.escolaClr]}>COPIAR</Text>
          </View>
        </View>
      </View>
      <View style={[styles.infoEntregaChild, styles.infoPosition]} />
      <View style={[styles.local, styles.infoPosition]}>
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
  infoPosition: {
    left: 11,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
  },
  escolaClr: {
    color: Color.verde1,
    lineHeight: 15,
  },
  escolaTypo: {
    fontSize: FontSize.size_sm,
    left: 0,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  previsoDeEntrega: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  ddmmaa: {
    marginTop: 4,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  infoBottomChild: {
    width: 1,
    height: 39,
    marginLeft: 10,
  },
  text: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  copiar: {
    fontFamily: FontFamily.interRegular,
    textAlign: "right",
    marginLeft: 10,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    color: Color.verde1,
  },
  parent: {
    marginTop: 4,
    flexDirection: "row",
  },
  codigoRastreio: {
    marginLeft: 10,
  },
  infoBottom: {
    top: 105,
    flexDirection: "row",
    right: 12,
    left: 11,
    position: "absolute",
  },
  infoEntregaChild: {
    top: 98,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderTopWidth: 1,
    height: 1,
    right: 12,
    left: 11,
    position: "absolute",
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
    lineHeight: 15,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  entregaEm: {
    top: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    lineHeight: 21,
  },
  local: {
    top: 7,
    width: 184,
    height: 76,
    left: 11,
    position: "absolute",
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

export default InfoEntrega2;
