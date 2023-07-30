/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import CoreComponents from './screens/CoreComponents';
import { DefaultTheme, NavigationContainer, createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, Button, ImageBackground, StatusBar, useColorScheme } from 'react-native';
import AdvanceCoreComponets from './screens/AdvanceCoreComponets';
import { Text } from 'react-native';
import { Image } from 'react-native-svg';
import ModalScreen from './screens/ModalScreen';
import SplashScreen from 'react-native-splash-screen'



const Stack = createStackNavigator();


const navigatorDarkTheme = {
  dark : true ,
  colors : {
    background : "#2a2a2a",
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
  useEffect(()=>{
    // SplashScreen.hide();
  },[])
  return (<>
  <StatusBar backgroundColor={"transparent"} />
    <NavigationContainer theme={dark ? navigatorDarkTheme : navigatorLightTheme} >
      <Stack.Navigator screenOptions={(props)=>({
        headerMode : "screen" ,
        headerRight : props=>(<Button
          title="Exit"
          onPress={()=>Alert.alert("Exit" , "Sure to Exit" , [{text:"ok", onPress:()=>{} }, {text:"Cancel" , onPress:()=>(null)}]  )}
          />),
        headerLeft : ()=>(<Button
          title="Modal"
          onPress={()=>{
            
             props.navigation.navigate("Modal")} }
          />),
    
    
    })}  >
        <Stack.Screen name="Core Components" component={CoreComponents} options={{headerTitle:(props)=>(<Text>Home Page</Text>),
      headerTitleAlign : "center",
      headerTitleAllowFontScaling : true ,
      }}  />
        <Stack.Screen name="Advance Core Components" component={AdvanceCoreComponets} initialParams={{ comp : "App"}} />
        


      <Stack.Group screenOptions={{presentation:"modal"}}>
        <Stack.Screen name='Modal' component={ModalScreen}  />
      </Stack.Group>



      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}



export default App;
