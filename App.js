import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/AppNavigator";
import { Provider } from "react-redux";
import { Store } from "./app/redux/Store";
import { navigationRef } from "./NavigationRoot";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
    
        <AppNavigator />
       
  
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({

})