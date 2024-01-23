import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import Navbar from "../../components/Navbar";
import MainTitle from "../../components/MainTitle";
import MainFiltro2 from "../../components/MainFiltro2";
import ToolBar1 from "../../components/ToolBar1";
import OrderEntregue from "../../components/listItems/OrderEntregue";
import OrderCriado from "../../components/listItems/OrderCriado";
import OrderSeparado from "../../components/listItems/OrderSeparado";
import OrderDespachado from "../../components/listItems/OrderDespachado";
import OrderEntregueAvaliado from "../../components/listItems/OrderEntregueAvaliado";
import OrderEntregueFaltaAvaliar from "../../components/listItems/OrderEntregueFaltaAvaliar";
import { Color, Padding, Margin } from "../../GlobalStyles";

const HomeSeduc = () => {
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
                <View style={styles.dashOptions}>
                    <Text style={styles.optionsChild}>
                        Fornecedor
                    </Text>
                    <Text style={styles.optionsChild}>Tempo</Text>
                    <Text style={styles.optionsChild}>Sistema</Text>
                </View>
                <MainFiltro2 />
                <View style={styles.dashBox}>
                    <View style={styles.dashChild1}>
                        <View style={styles.left1}>
                            <View style={styles.left1Child1}></View>
                            <View style={styles.left1Child2}></View>
                        </View>
                        <View style = {styles.right1}></View>
                    </View>
                    <View style={styles.dashChild2}></View>
                </View>
            </ScrollView>
            <ToolBar1 active="Home"/>
        </View>
    );
};

const styles = StyleSheet.create({
    dashOptions: {
        flexDirection: "row",
        gap: 10,
        marginTop: 33,
        marginBottom: 20,
        marginLeft: 25,
    },
    optionsChild: {
        // width: 90,
        // height: 90,
        // backgroundColor: Color.verde1,
    },
    dashBox: {
        height: 360,
        width: "100%",
        // backgroundColor: "green",
        paddingHorizontal: 25,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    dashChild1: {
        width: "100%",
        height: 230,
        // backgroundColor: "red",
        flexDirection: "row",
        gap: 20,
    },
    dashChild2: {
        width: "100%",
        height: 110,
        backgroundColor: Color.mainBg,
        borderWidth: 2,
        borderColor: Color.verde1,
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
    },
    left1: {
        // width: "50%",
        height: "100%",
        // backgroundColor: "yellow",
        flex: 1,
        gap: 20,
    },
    left1Child1: {
        width: "100%",
        backgroundColor: Color.verde1,
        flex: 1,
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
    },
    left1Child2: {
        width: "100%",
        backgroundColor: Color.mainBg,
        flex: 1,
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
    },
    right1: {
        // width: "50%",
        height: "100%",
        backgroundColor: "#B5F2D0",
        flex: 1,
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
    },
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

export default HomeSeduc;
