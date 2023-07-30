
import { FC } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type props ={
    route : object | undefined ,
    navigation : any
}

const AdvanceCoreComponets:FC<props> = ({route ,navigation}:props)=> {

    const data = route.params;


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
    </ScrollView>
  )
}


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

export default AdvanceCoreComponets;