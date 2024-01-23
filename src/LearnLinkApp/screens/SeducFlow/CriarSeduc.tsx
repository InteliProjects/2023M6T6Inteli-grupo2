import React, { memo } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import WFButton from "../../components/WFButton";
import DropDownBase from "../../components/DropDownBase";
import TextInput1 from "../../components/TextInput1";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";
import MainTitle from "../../components/MainTitle";

const CriarSeduc = memo(() => {
  return (
    <ScrollView
        style={[styles.scrollview, styles.scrollviewFlexBox]}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
    >
        <View style={styles.body}>
        <MainTitle title="Criar Pedido" />
        <View style={styles.frame}>
            <View style={styles.frameParent}>
            <View style={styles.frame1}>
                <View style={styles.wfDropDown}>
                <DropDownBase label="Escola" value={`{textInputValue}`} />
                </View>
                <View style={styles.wfTextArea}>
                <View style={styles.textAreaBase}>
                    <View style={styles.labelStack}>
                    <Text style={styles.label}>Produtos</Text>
                    </View>
                    <TextInput1 />
                </View>
                </View>
            </View>
            <DropDownBase
                dropDownBaseJustifyContent="flex-end"
                dropDownBaseMarginTop={20}
                label="Fornecedor"
                value={`{textInput1Value}`}
            />
            </View>
        <WFButton />
        </View>
        </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  titleLayout: {
    height: 22,
    position: "absolute",
  },
  titulo: {
    top: 0,
    left: 26,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    display: "flex",
    alignItems: "flex-end",
    width: 334,
    textAlign: "left",
  },
  title: {
    top: 28,
    left: 0,
    width: 360,
  },
  wfDropDown: {
    height: 82,
    alignSelf: "stretch",
  },
  label: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.1,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    alignSelf: "stretch",
    textAlign: "left",
  },
  labelStack: {
    alignSelf: "stretch",
  },
  textAreaBase: {
    flex: 1,
    alignSelf: "stretch",
  },
  wfTextArea: {
    height: 147,
    marginTop: 5,
    alignSelf: "stretch",
  },
  frame1: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame: {
    // top: 99,
    // right: 18,
    // left: 17,
    width: "100%",
    borderRadius: Border.br_8xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    // height: 366,
    justifyContent: "center",
    paddingHorizontal: 17,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    // position: "absolute",
    // overflow: "hidden",
    backgroundColor: Color.mainBg,
  },
  body: {
    height: 553,
    // overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainBg,
    gap: 80,

  },
  scrollViewContent: {
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollviewFlexBox: {
    flex: 1,
    backgroundColor: Color.mainBg,
  },
  scrollview: {
    marginTop: 1,
    alignSelf: "stretch",
  },
});

export default CriarSeduc;
