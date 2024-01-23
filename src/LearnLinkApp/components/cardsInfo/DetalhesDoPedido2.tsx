import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";

const DetalhesDoPedido2 = memo(() => {
  return (
    <View style={styles.detalhesDoPedido}>
      <View style={styles.detalhesDoPedidoParent}>
        <Text style={styles.detalhesDoPedido1}>Detalhes do Pedido</Text>
        <View style={styles.dataDaCompraParent}>
          <Text style={[styles.dataDaCompra, styles.r2400Typo]}>
            Data da Compra:
          </Text>
          <Text style={[styles.ddmmaa, styles.textTypo]}>DD/MM/AA</Text>
        </View>
      </View>
      <View style={[styles.detalhesDoPedidoChild, styles.parentSpaceBlock]} />
      <View style={styles.parentSpaceBlock}>
        <Text style={[styles.tipoQuantidade, styles.totalTypo]}>
          Tipo / Quantidade
        </Text>
        <View style={styles.frameChild} />
        <View style={styles.frameChild} />
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.totalParent, styles.parentSpaceBlock]}>
        <Text style={styles.totalTypo}>Total</Text>
        <Text style={[styles.r2400, styles.r2400Typo]}>R$ 24,00</Text>
      </View>
      <View style={[styles.detalhesDoPedidoChild, styles.parentSpaceBlock]} />
      <View style={styles.parentSpaceBlock}>
        <View style={styles.nfParent}>
          <Text style={[styles.dataDaCompra, styles.r2400Typo]}>NF:</Text>
          <Text style={[styles.text, styles.textTypo]}>
            5170 3982 3499 1002
          </Text>
        </View>
        <View style={styles.nrParent}>
          <Text style={[styles.dataDaCompra, styles.r2400Typo]}>NR:</Text>
          <Text style={[styles.text, styles.textTypo]}>
            7729 7492 5013 1739
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  r2400Typo: {
    color: Color.verde1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    color: Color.darkerGrey,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
  },
  parentSpaceBlock: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  totalTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  detalhesDoPedido1: {
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  dataDaCompra: {
    textAlign: "left",
  },
  ddmmaa: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    marginLeft: 17,
  },
  dataDaCompraParent: {
    marginTop: 5,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  detalhesDoPedidoParent: {
    alignSelf: "stretch",
  },
  detalhesDoPedidoChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderTopWidth: 1,
    height: 1,
  },
  tipoQuantidade: {
    width: 268,
  },
  frameChild: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorLightsteelblue,
    width: 302,
    height: 5,
    marginTop: 5,
  },
  r2400: {
    textAlign: "right",
  },
  totalParent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    marginLeft: 5,
  },
  nfParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  nrParent: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  detalhesDoPedido: {
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
    // overflow: "hidden",
    paddingHorizontal: Padding.p_2xs,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_2xs,
    marginTop: 20,
    alignSelf: "stretch",
  },
});

export default DetalhesDoPedido2;
