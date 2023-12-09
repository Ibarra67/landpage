import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function Landing({ navigation }) {
  return (
    <View styles={{ flex: 1}}>
        <View style={{padding: 50, alignContent: "center", marginTop: 100}}>
      <Text 
      style={{fontSize: 40, textAlign: "center"}}
      >IBARRA</Text>
      

      <Button 
      style={{ marginTop: 150, borderRadius: 5}}
      onPress={() => navigation.navigate("Login")}
      icon="login" mode="contained">Login</Button>

      <Button onPress={() => navigation.navigate("Register")}
      icon='account-plus' mode='contained' style={{ marginTop: 10, borderRadius: 5,}}>
        Signup
      </Button>
        </View>


    </View>
  );
}