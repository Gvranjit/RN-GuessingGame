import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

//Type definition
type StartGameScreenProps = {
     title?: string;
};

//Component Definition
const StartGameScreen = (props: StartGameScreenProps) => {
     return (
          <View style={styles.screen}>
               <Text style={styles.title}>Start a new game</Text>
               <View style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <TextInput style={styles.textInput} />

                    <View style={styles.buttonContainer}>
                         <Button
                              color="black"
                              accessibilityLabel="pneumonoultramicroscopicsilicovolcanoconosis"
                              title="Reset"
                              onPress={() => {}}
                         />
                         <Button color="black" title="Confirm" onPress={() => {}} />
                    </View>
               </View>
          </View>
     );
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
          padding: 10,
          alignItems: "center",
          justifyContent: "space-evenly",
     },
     title: {
          fontSize: 20,
          marginVertical: 10,
     },

     buttonContainer: {
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 15,
     },
     inputContainer: {
          width: 300,
          maxWidth: "80%",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          shadowOpacity: 0.26,
          backgroundColor: "white",
          elevation: 5,
          padding: 15,
          borderRadius: 10,
     },
     textInput: {
          borderColor: "#EBEEEA",
          backgroundColor: "#EBEEEA",
          borderWidth: 1,
          width: "80%",
          margin: 15,
          paddingHorizontal: 10,
     },
});

export default StartGameScreen;
