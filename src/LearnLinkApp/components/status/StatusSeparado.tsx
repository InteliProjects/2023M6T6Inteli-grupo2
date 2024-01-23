import React, { memo } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const StatusSeparado = memo(() => {
  // const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const navigation = useNavigation();

  return (
    <View style={styles.statusconfirmado}>
      <View style={[styles.headertop, styles.headertopFlexBox]}>
        <Pressable
          style={styles.iosIcon24ChevronLeft}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../assets/ios--icon--24--chevronleftlg.png")}
          />
        </Pressable>
        <Text style={styles.acompanheSeuPedido}>{`ACOMPANHE SEU PEDIDO `}</Text>
      </View>
      <Image
        style={[styles.statusconfirmadoChild, styles.statusParentSpaceBlock]}
        resizeMode="cover"
        source={require("../../assets/line-1.png")}
      />
      <View style={[styles.statusParent, styles.statusParentSpaceBlock]}>
        <View style={styles.status}>
          <Text style={styles.statusDoPedido}>Status do pedido</Text>
          <Text style={styles.confirmado}>Separado</Text>
        </View>
        <View style={styles.sb5}>
          <View style={[styles.frameParent, styles.framePosition]}>

            <View style={styles.rec1Parent}>
              <View style={[styles.rec1, styles.recPositionGreen]} />
              <Image
                style={[styles.frameChild, styles.framePosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-2.png")}
              />
              <Text style={styles.pastStatus}>Confirmado</Text>
            </View>

            <View style={styles.rec1Parent}>
              <View style={[styles.rec2, styles.recPosition]} />
              <Image
                style={[styles.frameChild, styles.framePosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-2.png")}
              />
              <Text style={[styles.separado, styles.presentStatus]}>
                Separado
              </Text>
            </View>

            <View style={styles.rec1Parent}>
              <View style={[styles.rec3, styles.recPosition]} />
              <Image
                style={[styles.frameChild, styles.framePosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-4.png")}
              />
              <Text style={[styles.despachado, styles.futureStatus]}>
                Despachado
              </Text>
            </View>

            <View style={styles.rec1Parent}>
              <View style={[styles.rec4, styles.recPosition]} />
              <Image
                style={[styles.frameChild, styles.framePosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-4.png")}
              />
              <Text style={[styles.separado, styles.futureStatus]}>
                Entregue
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headertopFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusParentSpaceBlock: {
    marginTop: 11,
    alignSelf: "stretch",
  },
  framePosition: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  recPosition: {
    height: 1,
    backgroundColor: Color.grey,
    top: 5,
    position: "absolute",
  },
  recPositionGreen: {
    height: 1,
    backgroundColor: Color.verde1,
    top: 5,
    position: "absolute",
  },
  separadoTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 82,
    fontSize: FontSize.size_3xs,
    top: 7,
    textAlign: "left",
    color: Color.darkerGrey,
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iosIcon24ChevronLeft: {
    width: 24,
    height: 24,
  },
  acompanheSeuPedido: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "center",
    marginLeft: 47,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
  },
  headertop: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  statusconfirmadoChild: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 2,
    width: "100%",
  },
  statusDoPedido: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.darkerGrey,
    left: 0,
    top: 0,
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 0,
  },
  confirmado: {
    top: 21,
    fontSize: FontSize.size_3xl,
    color: Color.verde1,
    textAlign: "left",
    left: 0,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
  },
  status: {
    width: "100%",
    height: 42,
  },
  rec1: {
    right: -1,
    left: 6,
    height: 1,
    backgroundColor: Color.verde1,
    top: 5,
  },
  frameChild: {
    width: 11,
    height: 11,
    left: 0,
  },
  confirmado1: {
    width: 82,
    fontSize: FontSize.size_3xs,
    top: 7,
    color: Color.verde1,
    textAlign: "left",
    left: 0,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "300",
    lineHeight: 21,
    letterSpacing: 0,
  },
  rec1Parent: {
    flex: 1,
    height: 28,
  },
  rec2: {
    right: 0,
    left: 6,
    height: 1,
    backgroundColor: Color.grey,
    top: 5,
  },
  separado: {
    left: 0,
  },
  rec3: {
    right: -5,
    left: 5,
    height: 1,
    backgroundColor: Color.grey,
    top: 5,
  },
  despachado: {
    left: 1,
  },
  rec4: {
    right: -6,
    display: "none",
    left: 6,
    height: 1,
    backgroundColor: Color.grey,
    top: 5,
  },
  frameParent: {
    right: -38,
    justifyContent: "space-between",
    left: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  sb5: {
    marginTop: 22,
    height: 28,
    alignSelf: "stretch",
  },
  statusParent: {
    paddingLeft: Padding.p_xl,
  },
  statusconfirmado: {
    backgroundColor: Color.mainBg,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    zIndex: 1,
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    alignSelf: "stretch",
  },
  pastStatus: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 82,
    fontSize: FontSize.size_3xs,
    top: 7,
    textAlign: "left",
    color: Color.verde1,
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 0,
  },
  presentStatus: {
    fontFamily: FontFamily.interLight,
    fontWeight: "700",
    width: 82,
    fontSize: FontSize.size_3xs,
    top: 7,
    textAlign: "left",
    color: Color.verde1,
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 0,
  },
  futureStatus: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 82,
    fontSize: FontSize.size_3xs,
    top: 7,
    textAlign: "left",
    color: Color.darkerGrey,
    position: "absolute",
    lineHeight: 21,
    letterSpacing: 0,
  },
});

export default StatusSeparado;
