import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components";
import { StartGameScreen } from "./screens";
export default function App() {
     return (
          <View style={styles.screenView}>
               <Header title="Guessing Game"></Header>
               <StartGameScreen></StartGameScreen>
          </View>
     );
}

const styles = StyleSheet.create({
     screenView: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
     },
});
