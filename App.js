import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import globalstyles from "./src/conf/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {PaperProvider, MD3LightTheme as DefaultTheme,} from "react-native-paper";
import colors from "./src/conf/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginMonitors from "./src/components/monitors/LoginMonitors";
import RegisterMonitors from "./src/components/monitors/RegisterMonitors";
import ForgotMonitors from "./src/components/monitors/ForgotMonitors";
import ForgotForms from "./src/components/forms/ForgotForms";

import Landing from "./src/components/monitors/Landing";
import Main from "./src/components/monitors/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors.colors,
    mode: "exact",
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginMonitors}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterMonitors}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ForgotForms"
              component={ForgotForms}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Landing"
              component={Landing}
            />
              <Stack.Screen
              options={{ headerShown: false }}
              name="Main"
              component={Main}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);
