// import * as React from "react";
import React, { memo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MainTitle from "../../components/MainTitle";
import MainFiltros from "../../components/MainFiltros";
import OrderCriado from "../../components/listItems/OrderCriado";
import { Color, Padding, Margin } from "../../GlobalStyles";

const HomeFornecedora = memo(() => {
  return (
      <ScrollView
        style={[styles.scrollview, styles.scrollviewFlexBox]}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <MainTitle title="Novos Pedidos" count="3"/>
        <MainFiltros />
        <View style={styles.orderslist}>
          <OrderCriado path='PedidosConfirmadoF'/>
          <OrderCriado path='PedidosConfirmadoF'/>
          <OrderCriado path='PedidosConfirmadoF'/>
        </View>
      </ScrollView>
  );
});

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

export default HomeFornecedora;
