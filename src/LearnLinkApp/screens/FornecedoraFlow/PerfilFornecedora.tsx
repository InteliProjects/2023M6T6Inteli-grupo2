import React, { memo } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";

const PerfilFornecedora = memo(() => {
  return (
    <ScrollView
        style={[styles.scrollview, styles.scrollviewFlexBox]}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
    >
    <View style={styles.body}>
      {/* <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../../assets/ellipse-1.png")}
      /> */}
      <View style={[styles.frame, styles.frameSpaceBlock]}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Text style={[styles.fornecedor, styles.fornecedorTypo]}>
              SEDUC
            </Text>
          </View>
          <Text style={[styles.informaesCadastrais, styles.fornecedorTypo]}>
            Informações Cadastrais
          </Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.frame3Layout]}>
        <View style={styles.detalhesPerfil}>
          <View style={[styles.detalhesEntregaF, styles.frame3Layout]}>
            <Text style={styles.detalhesDePerfil}>Detalhes de Perfil</Text>
            <View style={styles.frameParent}>
              <View style={styles.fornecedorParent}>
                <Text style={[styles.fornecedor1, styles.contatoTypo]}>
                  Nome
                </Text>
                <Text style={styles.nomeDoFornecedor}>Nome aqui</Text>
              </View>
              <View style={styles.frameSpaceBlock}>
                <Text style={[styles.contato, styles.contatoTypo]}>
                  Contato:
                </Text>
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
          <View style={styles.emailParent}>
            <Text style={[styles.contato, styles.contatoTypo]}>Email</Text>
            <View style={styles.iconPhoneParent}>
              <Text style={styles.textTypo}>email@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  frameSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  fornecedorTypo: {
    textAlign: "left",
    color: Color.mainBg,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  frame3Layout: {
    height: 402,
    overflow: "hidden",
  },
  contatoTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameIcon: {
    maxWidth: "100%",
    height: 148,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  fornecedor: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.mainBg,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  frame2: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  informaesCadastrais: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.mainBg,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  frame1: {
    width: 195,
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  detalhesDePerfil: {
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  fornecedor1: {
    color: Color.colorBlack,
  },
  nomeDoFornecedor: {
    marginTop: 5,
    color: Color.darkerGrey,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 15,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
  },
  fornecedorParent: {
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
    marginLeft: 6,
  },
  iconPhoneParent: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  frameParent: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  detalhesEntregaF: {
    top: 0,
    right: 18,
    left: 17,
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
    position: "absolute",
  },
  emailParent: {
    top: 136,
    right: 22,
    left: 28,
    position: "absolute",
  },
  detalhesPerfil: {
    flex: 1,
    alignSelf: "stretch",
  },
  frame3: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: Color.verde1,
    width: 360,
    paddingBottom: Padding.p_6xl,
    alignItems: "center",
    overflow: "hidden",
  },
  scrollViewContent: {
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollviewFlexBox: {
    flex: 1,
    backgroundColor: Color.verde1,
  },
  scrollview: {
    marginTop: 1,
    alignSelf: "stretch",
  },
});

export default PerfilFornecedora;
