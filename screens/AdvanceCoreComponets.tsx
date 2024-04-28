
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationAction, NavigationProp, NavigationState, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { FC } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type props ={
    route : object | undefined ,
    navigation : any
}

const AdvanceCoreComponets: FC<ParamListBase> = ()=> {

    const navigation:any  = useNavigation();
    const route = useRoute();
    const data:any = route.params;

    const Tab = createMaterialTopTabNavigator();

  return (
    <ScrollView contentContainerStyle={styles.containerStyle}>
        <View style= {styles.cards} >
            <Text style={styles.heading} >Stack Navigations </Text>
            <Button title="Go Back" onPress={()=>navigation.goBack()} />
            <Button title="Push This Again" onPress={()=>navigation.push("Advance Core Components")} />
            <Button title="Push Core Componenets" onPress={()=>navigation.push("Core Components")} />
            <Button title="Pop to Top" onPress={()=>navigation.popToTop()} />
            <Button title="chagne Title" onPress={()=>navigation.setOptions({title:"I'am Changed"})} />
            <Text style={styles.textStyle} >Data between screens - { data.comp }</Text>
        </View>

        <Text style={styles.heading} >Advance components </Text>

        <Tab.Navigator>
            <Tab.Screen name="Left" component={LeftTab} />
            <Tab.Screen name="Center" component={CenterTab} />
            <Tab.Screen name="Right" component={RightTab} />
        </Tab.Navigator>


    </ScrollView>
  )
}

const LeftTab = () => {
  return (
    <View><Text>Left </Text></View>
  )
}
const RightTab = () => {
  return (
    <View><Text>Right </Text></View>
  )
}
const CenterTab = () => {
  return (
    <View><Text>Center </Text></View>
  )
}

export default AdvanceCoreComponets



const styles = StyleSheet.create({
    containerStyle :{
        flex:1 ,
        gap:20 ,
        padding : 20,

    },
    cards : {
        gap : 20,
    },
    textStyle:{
        fontSize : 18,
    },
    heading:{
        fontSize:25 ,
        fontWeight : "500" ,
    }
})
