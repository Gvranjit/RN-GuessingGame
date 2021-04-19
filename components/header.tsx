import React from "react";
import { View, Text, StyleSheet, StyleSheetProperties, StyleProp, ViewStyle } from "react-native";
//Type definition
type HeaderProps = {
     title: string;
};

//Component Definition
const Header = (props: HeaderProps) => {
     return (
          <View style={styles.header}>
               <Text style={styles.headerTitle}>{props.title}</Text>
          </View>
     );
};

const styles = StyleSheet.create({
     header: {
          width: "100%",
          height: 90,
          paddingTop: 36,
          backgroundColor: "#f7287b",
          alignItems: "center",
          justifyContent: "center",
     },
     headerTitle: {
          color: "white",
          fontSize: 20,
     },
});

export default Header;
