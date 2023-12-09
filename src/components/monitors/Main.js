import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput, TouchableOpacity } from "react-native-paper";

export default function Main({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1,}}>
        <View style={{alignItems: "center", padding: 25,}}>
      <Text 
      style={{fontSize: 35, justifyContent: 'center', padding: 20, alignContent: "center"}}
      >WELCOME BACK</Text>

      <Text>This is MainPage after loggin in and register</Text>
        

      <Button
      icon="login" mode="contained" 
      style={{ marginTop: 500, borderRadius: 5}}
      onPress={() => navigation.navigate("Landing")}>Log Out</Button>
        </View>

    </View>
  );
}
