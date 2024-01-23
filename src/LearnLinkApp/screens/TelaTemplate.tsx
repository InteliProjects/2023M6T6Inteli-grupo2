import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Navbar from "../components/Navbar";
import MainTitle from "../components/MainTitle";
import MainFiltros from "../components/MainFiltros";
import ToolBar1 from "../components/ToolBar1";
import OrderEntregue from "../components/listItems/OrderEntregue";
import OrderCriado from "../components/listItems/OrderCriado";
import OrderSeparado from "../components/listItems/OrderSeparado";
import OrderDespachado from "../components/listItems/OrderDespachado";
import OrderEntregueAvaliado from "../components/listItems/OrderEntregueAvaliado";
import OrderEntregueFaltaAvaliar from "../components/listItems/OrderEntregueFaltaAvaliar";
import { Color, Padding, Margin } from "../GlobalStyles";

const TelaTemplate = () => {
  return (
    <View style={[styles.telatemplate, styles.scrollviewFlexBox]}>
      <Navbar />
      <ScrollView
        style={[styles.scrollview, styles.scrollviewFlexBox]}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <MainTitle title="Home" />
        <MainFiltros />
        <View style={styles.orderslist}>
          <OrderCriado />
          <OrderSeparado />
          <OrderDespachado />
          <OrderEntregue />
          <OrderEntregueAvaliado />
          <OrderEntregueFaltaAvaliar />
        </View>
      </ScrollView>
      <ToolBar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollviewFlexBox: {
    flex: 1,
    backgroundColor: Color.mainBg,
  },
  orderslist: {
    paddingHorizontal: Padding.p_6xl,
    paddingBottom: 30,
    marginTop: 30,
    gap: 30,
    alignSelf: "stretch",
  },
  scrollview: {
    marginTop: 1,
    alignSelf: "stretch",
  },
  telatemplate: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: Margin.mainMargin,
  },
});

export default TelaTemplate;
