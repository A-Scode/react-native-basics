import { FC, useEffect, useState  ,useRef, useCallback } from "react";
import {
    Alert,
    Animated,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text, 
    TextInput, 
    View,
} from 'react-native';


type props = {
	navigation : any
}

const CoreComponents: FC<props> =({navigation}:props)=>{

    const catSize  = useRef(new Animated.Value(100)).current;
    const [sizeValue , setSizeValue]  = useState(100);

    const set_catSize = useCallback((value) =>{
      Animated.spring(catSize , {
        toValue : value ,
        useNativeDriver : false,
      }).start()
      setSizeValue(value);
    } , [catSize])

	const [text , setText ] = useState("This is default value");

    // useEffect( ()=>{console.log(catSize)} , [catSize])

    return (
      <ScrollView
        scrollEnabled
        overScrollMode="always"
        contentContainerStyle={{
          ...styles.containerStyle,
          // alignItems: '',
          borderColor: 'yellow',
          flex: 0,
        }}>
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Core Componnents💻</Text>
          <View style={styles.components}>
            <Text>This green bordered box is View component</Text>
            <Text>Below is an Image component</Text>
            <ScrollView
              scrollEnabled
              style={styles.imageScrollView}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
              }}
              StickyHeaderComponent={() => <Text>hello</Text>}>
              <Image
                style={styles.imageStyle}
                source={require('../assets/images/7112.jpg')}
              />
              {/* <CodeImage /> */}
            </ScrollView>

            <TextInput
              style={[
                styles.textInputStyle,
                styles.shadowProps,
                styles.elevationProps,
              ]}
              placeholder="somePlaceholder"
              onChangeText={data => {
                setText(data);
              }}
              value={text}
            />

            <Text> Below is image with uri🕸 -</Text>
             < Animated.Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={{alignSelf: 'center'}}
              height={catSize}
              width={catSize}
            />

            <Text> React Native Buttons</Text>
            <Button
              title="Grow Cat"
              onPress={() => {
                if (sizeValue >= 300)
                  Alert.alert('Max Cat Size Reached', "Can't grow cat anymore");
                set_catSize(sizeValue + 25);
              }}
              disabled={sizeValue > 300}
            />
            <Button
              title="Shrink Cat"
              onPress={() => {
                if (sizeValue <= 50)
                  Alert.alert('Max Cat Size Reached', "Can't grow cat anymore");
                set_catSize(sizeValue - 25);
              }}
              disabled={sizeValue < 50}
            />

            <Text style={{fontSize: 30}}>
              {text
                .split(' ')
                .map(word => '🥞')
                .join(' ')}
            </Text>

            <Button
              title="Advance"
              onPress={() => {
                navigation.navigate('Advance Core Components', {
                  comp: 'Core Componenets',
                });
              }}
            />
            <Button
              title="Basic Animations"
              onPress={() => {
                navigation.navigate('Basic Animations', {
                  comp: 'Basic Animations',
                });
              }}
            />
            <Button
              title="Reanimated Animations"
              onPress={() => {
                navigation.navigate('Reanimated Animations', {
                  comp: 'Reanimated Animations',
                });
              }}
            />
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
    alignSelf : 'center',
    borderWidth : 2 ,
    borderColor : "green",
    padding : 10 ,
    gap : 20,
    flex : 1,
  },
  imageStyle :{
    flex : 1,
    aspectRatio : 2,
  },
  imageScrollView:{
    height : 200,
    
  },
  textInputStyle:{
    borderWidth : 2,
    borderRadius : 10 ,
    paddingHorizontal : 10 ,
    fontSize : 20 ,
    borderColor : "#00a6ff",
	backgroundColor : "#ffffff23" ,
	
},

shadowProps : {
	
	shadowOffset : {
		width : -2, height : 4
	} ,
	shadowOpacity : 1 ,
	shadowColor : "#00a6ff",
	shadowRadius : 10 ,
  },

  elevationProps : {
	elevation : 20 ,
  },


  ButtonStyle:{

  }
})

export default CoreComponents;