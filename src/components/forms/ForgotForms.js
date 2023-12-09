import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function ForgotForms({ navigation }) {
  return (
    <View styles={{ flex: 1,}}>
      
      <View style={{alignContent: "center", padding: 35,}}>
      <Text 
      style={{fontSize: 25, justifyContent: 'center', alignItems: "center"}}
      >Forgot Password</Text>
      
      <TextInput
        mode="outlined"
        placeholder="Enter Old Password"
        label="Enter Old Password"
        style={{ marginTop: 10 }}
      />      
      <TextInput
      mode="outlined"
      placeholder="Enter New Password"
      label="Enter New Password"
      style={{ marginTop: 10 }}
    />
      
      <Button 
      onPress={() => navigation.navigate("Login")}
      icon="login" mode="contained" style={{ marginTop: 10, borderRadius: 5, }}>
      Save
      </Button>

      <View
      style={{
        marginTop: 10,
        alignItems: 'row',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <Text>Back to <Text style={{color:"blue", textDecorationLine: "underline",  }} onPress={() => navigation.pop()}>Login</Text></Text>
      </View>
      </View>

    </View>
  );
}
