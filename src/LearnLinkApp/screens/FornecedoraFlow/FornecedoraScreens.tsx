import React, { memo, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { FontFamily, FontSize, Color, Padding, Margin } from "../../GlobalStyles";
import Navbar from "../../components/Navbar";
import HomeFornecedora from "./HomeFornecedora";
import PedidosFornecedora from "./PedidosFornecedora";
import HistoricoFornecedora from "./HistoricoFornecedora";
import PerfilFornecedora from "./PerfilFornecedora";

const FornecedoraScreens = () => {

  // State to track the active button
    const [activeButton, setActiveButton] = useState<string | null>('Home');

  // Function to set active button and change image
    const handleButtonPress = (buttonName: string) => {
        setActiveButton(buttonName);
    };

  // Function to get the image source based on the button state
    const getImageSource = (buttonName: string) => {
        const defaultImages: { [key: string]: any } = {
            Home: require("../../assets/icon-placeholder.png"),
            Pedidos: require("../../assets/iconplaceholder1.png"),
            Historico: require("../../assets/iconplaceholder2.png"),
            Perfil: require("../../assets/iconplaceholder3.png"),
        };
        const activeImages: { [key: string]: any } = {
            Home: require("../../assets/iconplaceholder.png"), 
            Pedidos: require("../../assets/icon-placeholder-1.png"),
            Historico: require("../../assets/icon-placeholder-3.png"),
            Perfil: require("../../assets/icon-placeholder-4.png"),
        };

        return activeButton === buttonName ? activeImages[buttonName] : defaultImages[buttonName];
    };

  // Function to get the text style based on the button state
    const getTextStyle = (buttonName: string) => {
        return activeButton === buttonName ? styles.label1 : styles.label;
    };

    return (
        <View style={[styles.telatemplate, styles.scrollviewFlexBox]}>
            <Navbar />
            {activeButton === 'Home' ? <HomeFornecedora /> : activeButton === 'Pedidos' ? <PedidosFornecedora /> : activeButton === 'Historico' ? <HistoricoFornecedora /> : activeButton==='Perfil' ? <PerfilFornecedora/> : <HomeFornecedora />}
            <View style={styles.toolbar}>
                <View style={styles.toolbarItems}>
                    <TouchableOpacity 
                        style={[styles.homebutton, styles.homebuttonLayout]}
                        onPress={() => {handleButtonPress('Home')}}
                    >
                        <Image
                            style={styles.iconPlaceholder}
                            resizeMode="cover"
                            source={getImageSource('Home')}
                        />
                        <Text style={[getTextStyle('Home'), styles.homeTypo]}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.homebutton, styles.homebuttonLayout]}
                        onPress={() => {handleButtonPress('Pedidos')}}
                    >
                        <Image
                            style={styles.iconPlaceholder}
                            resizeMode="cover"
                            source={getImageSource('Pedidos')}
                        />
                        <Text style={[getTextStyle('Pedidos'), styles.homeTypo]}>Pedidos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.homebutton, styles.homebuttonLayout]}
                        onPress={() => {handleButtonPress('Historico')}}
                    >
                        <Image
                            style={styles.iconPlaceholder}
                            resizeMode="cover"
                            source={getImageSource('Historico')}
                        />
                        <Text style={[getTextStyle('Historico'), styles.homeTypo]}>Historico</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.homebutton, styles.homebuttonLayout]}
                        onPress={() => {handleButtonPress('Perfil')}}
                    >
                        <Image
                            style={styles.iconPlaceholder}
                            resizeMode="cover"
                            source={getImageSource('Perfil')}
                        />
                        <Text style={[getTextStyle('Perfil'), styles.homeTypo]}>Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homebuttonLayout: {
        height: 64,
        width: 62,
    },
    homeTypo: {
        textAlign: "center",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        lineHeight: 12,
        letterSpacing: -0.1,
        fontSize: FontSize.size_xs,
        bottom: 9,
        width: 62,
        left: 0,
        position: "absolute",
    },
    iconPlaceholder: {
        marginLeft: -12.2,
        top: 11,
        left: "50%",
        width: 24,
        height: 24,
        position: "absolute",
        overflow: "hidden",
    },
    home: {
        color: Color.verde1,
    },
    homebutton: {
        backgroundColor: Color.mainBg,
        height: 64,
        width: 62,
    },
    label: {
        color: Color.grey,
    },
    label1: {
        color: Color.verde1,
    },
    toolbarItems: {
        top: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: Padding.p_5xs,
        paddingVertical: 0,
        left: 0,
        position: "absolute",
    },
    toolbar: {
        alignSelf: "stretch",
        borderStyle: "solid",
        borderColor: Color.border,
        borderTopWidth: 1,
        height: 81,
        marginTop: 1,
        overflow: "hidden",
        backgroundColor: Color.mainBg,
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

export default FornecedoraScreens;