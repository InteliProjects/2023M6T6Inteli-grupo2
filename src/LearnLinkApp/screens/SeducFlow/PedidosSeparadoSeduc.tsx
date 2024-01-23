import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import StatusConfirmado from "../../components/status/StatusConfirmado";
import StatusSeparado from "../../components/status/StatusSeparado";
import StatusDespachado from "../../components/status/StatusDespachado";
import StatusEntregue from "../../components/status/StatusEntregue";
import InfoEntrega1 from "../../components/cardsInfo/InfoEntrega1";
import InfoEntrega2 from "../../components/cardsInfo/InfoEntrega2";
import InfoEntrega3 from "../../components/cardsInfo/InfoEntrega3";
import DetalhesDoPedido1 from "../../components/cardsInfo/DetalhesDoPedido1";
import DetalhesDoPedido2 from "../../components/cardsInfo/DetalhesDoPedido2";
import DetalhesEntregaF from "../../components/cardsInfo/DetalhesEntregaF";
import DetalhesEntregaT from "../../components/cardsInfo/DetalhesEntregaT";
import DetalhesEntregaFT from "../../components/cardsInfo/DetalhesEntregaFT";
import { Color, Padding, Margin } from "../../GlobalStyles";

const PedidosSeparadoS = () => {
  return (
    <View style={styles.telatemplate3}>
      <StatusSeparado />
      <ScrollView
        style={styles.infoEntregaParent}
        indicatorStyle="white"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <InfoEntrega1 />
        <DetalhesDoPedido2 />
        <DetalhesEntregaFT />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 30,
  },
  infoEntregaParent: {
    alignSelf: "stretch",
    // paddingTop: 20,
    flex: 1,
  },
  telatemplate3: {
    backgroundColor: Color.border,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
    marginTop: Margin.mainMargin,
  },
});

export default PedidosSeparadoS;
