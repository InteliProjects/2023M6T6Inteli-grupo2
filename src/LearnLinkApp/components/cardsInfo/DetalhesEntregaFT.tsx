import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";

const DetalhesEntregaFT = memo(() => {
  return (
    <View style={styles.detalhesEntregaFt}>
      <Text style={styles.detalhesDaEntrega}>Detalhes da Entrega</Text>
      <View style={styles.frameParentSpaceBlock}>
        <View style={styles.fornecedorParent}>
          <Text style={styles.fornecedorTypo}>Fornecedor</Text>
          <Text style={[styles.nomeDoFornecedor, styles.nomeTypo]}>
            Nome do fornecedor
          </Text>
        </View>
        <View style={styles.contatoParent}>
          <Text style={styles.contatoTypo}>Contato:</Text>
          <View style={styles.iconFlexBox}>
            <Image
              style={styles.iconPhone}
              resizeMode="cover"
              source={require("../../assets/iconphone.png")}
            />
            <Text style={styles.text}>+55 (11) 95655-1907</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.detalhesEntregaFtChild, styles.frameParentSpaceBlock]}
      />
      <View style={styles.frameParentSpaceBlock}>
        <View style={styles.fornecedorParent}>
          <Text style={[styles.transportadora, styles.fornecedorTypo]}>
            Transportadora
          </Text>
          <Text style={[styles.nomeDaTransportadora, styles.nomeTypo]}>
            Nome da Transportadora
          </Text>
        </View>
        <View style={styles.contatoParent}>
          <Text style={[styles.contato1, styles.contatoTypo]}>Contato:</Text>
          <View style={styles.nomeDoResponsvelParent}>
            <Text style={[styles.nomeDoResponsvel, styles.jooDaSilvaPosition]}>
              Nome do Responsável:
            </Text>
            <Text style={[styles.jooDaSilva, styles.jooDaSilvaPosition]}>
              João da Silva
            </Text>
          </View>
          <View style={[styles.iconPhoneGroup, styles.iconFlexBox]}>
            <Image
              style={styles.iconPhone}
              resizeMode="cover"
              source={require("../../assets/iconphone.png")}
            />
            <Text style={styles.text}>+55 (11) 95655-1907</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  nomeTypo: {
    color: Color.darkerGrey,
    marginTop: 5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  frameParentSpaceBlock: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  fornecedorTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  contatoTypo: {
    color: Color.verde1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  jooDaSilvaPosition: {
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_xs,
    color: Color.darkerGrey,
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
  },
  iconFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  detalhesDaEntrega: {
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  nomeDoFornecedor: {
    marginTop: 5,
  },
  fornecedorParent: {
    alignSelf: "stretch",
  },
  iconPhone: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  text: {
    marginLeft: 6,
    fontSize: FontSize.size_xs,
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
  },
  contatoParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  detalhesEntregaFtChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderTopWidth: 1,
    height: 1,
  },
  transportadora: {
    alignSelf: "stretch",
  },
  nomeDaTransportadora: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  contato1: {
    alignSelf: "stretch",
  },
  nomeDoResponsvel: {
    left: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  jooDaSilva: {
    left: 131,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  nomeDoResponsvelParent: {
    height: 15,
    marginTop: 5,
    alignSelf: "stretch",
  },
  iconPhoneGroup: {
    alignSelf: "stretch",
  },
  detalhesEntregaFt: {
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

export default DetalhesEntregaFT;
