import React, { useState, useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type DropDownBaseType = {
  label?: string;
  value?: string;

  /** Style props */
  dropDownBaseJustifyContent?: string;
  dropDownBaseMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropDownBase = memo(
  ({
    dropDownBaseJustifyContent,
    dropDownBaseMarginTop,
    label,
    value,
  }: DropDownBaseType) => {
    const [textInputOpen, setTextInputOpen] = useState(false);
    const [textInputValue, setTextInputValue] = useState();
    const dropDownBaseStyle = useMemo(() => {
      return {
        ...getStyleValue("justifyContent", dropDownBaseJustifyContent),
        ...getStyleValue("marginTop", dropDownBaseMarginTop),
      };
    }, [dropDownBaseJustifyContent, dropDownBaseMarginTop]);

    return (
      <View style={[styles.dropDownBase, dropDownBaseStyle]}>
        <View style={styles.labelStack}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.textInput}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={textInputOpen}
            setOpen={setTextInputOpen}
            value="{value}"
            setValue={setTextInputValue}
            placeholder="Select"
            items={[]}
            labelStyle={styles.textInputValue}
            dropDownContainerStyle={styles.textInputdropDownContainer}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textInputValue: {
    color: "#2d3648",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  textInputdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#cbd2e0",
    borderWidth: 2,
  },
  label: {
    flex: 1,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.1,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  labelStack: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dropdownpicker: {
    backgroundColor: Color.mainBg,
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    borderStyle: "solid",
  },
  textInput: {
    borderRadius: Border.br_7xs,
    overflow: "hidden",
    marginTop: 8,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  dropDownBase: {
    alignSelf: "stretch",
  },
});

export default DropDownBase;
