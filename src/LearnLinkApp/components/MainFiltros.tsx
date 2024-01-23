import React, { memo } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const MainFiltros = memo(() => {
  return (
    <ScrollView
      style={styles.mainfiltros}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.mainFiltrosScrollViewContent}
    >
      <View style={[styles.filtroStatus, styles.filtroSpaceBlock]}>
        <Text style={styles.status}>Status</Text>
        <Image
          style={styles.iconChevronDown}
          resizeMode="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </View>
      <View style={[styles.filtroStatus1, styles.filtroSpaceBlock]}>
        <Text style={styles.status}>Date</Text>
        <Image
          style={styles.iconChevronDown}
          resizeMode="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </View>
      <View style={[styles.filtroStatus1, styles.filtroSpaceBlock]}>
        <Text style={styles.status}>Date</Text>
        <Image
          style={styles.iconChevronDown}
          resizeMode="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </View>
      <View style={[styles.filtroStatus1, styles.filtroSpaceBlock]}>
        <Text style={styles.status}>Date</Text>
        <Image
          style={styles.iconChevronDown}
          resizeMode="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </View>
      <View style={[styles.filtroStatus1, styles.filtroSpaceBlock]}>
        <Text style={styles.status}>Date</Text>
        <Image
          style={styles.iconChevronDown}
          resizeMode="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </View>
      <View style={[styles.filtroStatus1, styles.filtroSpaceBlock]}>
        <Text style={styles.status}>Date</Text>
        <Image
          style={styles.iconChevronDown}
          resizeMode="cover"
          source={require("../assets/iconchevrondown.png")}
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  mainFiltrosScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  filtroSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_4xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
  },
  status: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.verde1,
    textAlign: "left",
  },
  iconChevronDown: {
    width: 10,
    height: 10,
    overflow: "hidden",
    marginLeft: 9,
  },
  filtroStatus: {
    borderStyle: "solid",
    borderColor: Color.verde1,
    borderWidth: 0.5,
  },
  filtroStatus1: {
    backgroundColor: Color.border,
    marginLeft: 15,
  },
  mainfiltros: {
    width: "100%",
    marginTop: 30,
  },
});

export default MainFiltros;
