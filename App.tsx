/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CoreComponents from './screens/CoreComponents';
import { DefaultTheme, NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import AdvanceCoreComponets from './screens/AdvanceCoreComponets';



const Stack = createStackNavigator();


const navigatorDarkTheme = {
  dark : true ,
  colors : {
    background : "black",
  }
}
const navigatorLightTheme = {
  dark : true ,
  colors : {
    background : "white",
  }
}


function App(): JSX.Element {
  const dark = useColorScheme() === "dark";
  return (
    <NavigationContainer theme={dark ? navigatorDarkTheme : navigatorLightTheme} >
      <Stack.Navigator screenOptions={{headerMode : "screen"}}>
        <Stack.Screen name="Core Components" component={CoreComponents} />
        <Stack.Screen name="Advance Core Components" component={AdvanceCoreComponets} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
