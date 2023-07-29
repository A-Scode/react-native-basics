/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text, 
  View,
} from 'react-native';
import codeImage from "./assets/images/7112.jpg"


function App(): JSX.Element {
  return (
    <ScrollView scrollEnabled overScrollMode='always' contentContainerStyle={{...styles.containerStyle , alignItems : "" , borderColor:"yellow" , flex : 0}}>
    <View  style = {styles.containerStyle}>
      <Text style ={styles.textStyle} >
        Core Componnents💻
      </Text>
      <View style={styles.components} >
        <Text>This green bordered box is View component</Text>
        <Text>Below is an Image component</Text>
        <ScrollView scrollEnabled style = {styles.imageScrollView}
        StickyHeaderComponent={()=><Text>hello</Text>}
        horizontal
        
        >
          <Image style={styles.imageStyle} source={codeImage}  / >
        </ScrollView>
        
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle :{
    flex:1 ,
    borderWidth : 2 ,
    borderColor: "red",
    justifyContent : "flex-start" ,
    gap : 20 ,
    alignItems :"center",
    padding : 10 ,
  },
  textStyle : {
    fontSize : 25,
    
  },
  components:{
    alignSelf : 'baseline',
    borderWidth : 2 ,
    borderColor : "green",
    padding : 10 ,
    gap : 20,
  },
  imageStyle :{
    flex : 1,
  },
  imageScrollView:{
    height : 500,
    overflow : "scroll",
    
  }
})


export default App;
