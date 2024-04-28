/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import CoreComponents from './screens/CoreComponents';
import { DefaultTheme, NavigationContainer, Theme, createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, Button, Dimensions, ImageBackground, StatusBar, useColorScheme } from 'react-native';
import AdvanceCoreComponets from './screens/AdvanceCoreComponets';
import { Text } from 'react-native';
import { Image } from 'react-native-svg';
import ModalScreen from './screens/ModalScreen';
import SplashScreen from 'react-native-splash-screen'
import LottieView from 'lottie-react-native';



const Stack = createStackNavigator();

const navigatorDarkTheme:Theme = {
  dark : true ,
  colors : {
    ... DefaultTheme.colors,
    background : "#2a2a2a",
  }
}
const navigatorLightTheme = {
  dark : true ,
  colors : {
    ... DefaultTheme.colors,
    background : "white",
  }
}


function App(): JSX.Element {
  const dark = useColorScheme() === "dark";


  const [splash , setSplash] = useState(true);

  useEffect(()=>{
    // SplashScreen.hide();
  },[])
  return (<>
  {splash ? <LottieView
  source={ require("./assets/animations/splash_screen.json")}
  resizeMode='center'
  style={{height : Dimensions.get("window").height , backgroundColor :"rgb(236, 227, 52)" } }
  autoPlay
  loop={false}
  onAnimationFinish={()=>{setSplash(false)}}
  />:<>
    <StatusBar backgroundColor={"transparent"} />
    <NavigationContainer theme={dark ? navigatorDarkTheme : navigatorLightTheme} >
      <Stack.Navigator screenOptions={(props)=>({
        headerMode : "screen" ,
        headerRight : ()=>(<Button
          title="Go Back"
          onPress={()=>Alert.alert("Exit" , "Sure to Go Back" , [{text:"ok", onPress:()=>props.navigation.goBack() }, {text:"Cancel" , onPress:()=>(null)}]  )}
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
    }
    </>
  );
}



export default App;
