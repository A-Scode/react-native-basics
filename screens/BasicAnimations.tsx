import React, { useCallback, useRef , useState} from 'react'
import { View, StyleSheet, Button, Animated, Easing, Text, DevSettings, Alert, Vibration } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    root : {
        gap : 30,
        padding : 20,
    },
    timing_container:{
        alignItems : "center",
        gap : 20,
    },
    timing_box:{
        height : 100,
        width : 100,
        backgroundColor : "yellow",
        borderRadius : 10,
    },
    text:{
        fontSize:20,
    }
})

type posX = 'initial' | 'left' | 'right'


const BasicAnimations = () => {
    const [posXstate , setPosXstate ] =  useState<posX>('initial')

    const postionX = useRef(new Animated.Value(0)).current

    const [new_posXstate , new_setPosXstate ] =  useState<posX>('initial')

    const new_postionX = useRef(new Animated.Value(0)).current

    const [new_rotateX , new_setRotateX ] =  useState(0)

    useEffect(()=>{
        let subscribe = new_postionX.addListener(value=>{
            new_setRotateX(value.value)

            return subscribe
        })
    } ,[new_postionX])

    const changePosition = useCallback(()=>{
        if(posXstate === 'initial'){
        Animated.timing(postionX , {
            toValue : -100,
            duration : 300 ,
            useNativeDriver : false,
            easing : Easing.linear,
        }).start();
        setPosXstate('left')
    }
    
    else if(posXstate === 'left'){
        Animated.timing(postionX , {
            toValue : 100,
            duration : 300 ,
            useNativeDriver : false,
            easing : Easing.circle,
        }).start()
        setPosXstate('right')
    }
    
    else if(posXstate === 'right'){
        Animated.timing(postionX , {
            toValue : -100,
            duration : 300 ,
            useNativeDriver : false,
            easing : Easing.linear,
        }).start()
        setPosXstate('left')
    }

    } , [postionX , posXstate])

    const changePositionRotation = useCallback(()=>{
        if(new_posXstate === 'initial'){
        Animated.timing(new_postionX , {
            toValue : -100,
            duration : 300 ,
            useNativeDriver : false,
            easing : Easing.linear,
        }).start();
        new_setPosXstate('left')
    }
    
    else if(new_posXstate === 'left'){
        Animated.spring(new_postionX , {
            toValue : 100,
            // duration : 300 ,
            useNativeDriver : false,
        }).start()
        new_setPosXstate('right')
    }
    
    else if(new_posXstate === 'right'){
        Animated.spring(new_postionX , {
            toValue : -100,
            // duration : 300 ,
            useNativeDriver : false,
            // easing : Easing.linear,
        }).start()
        new_setPosXstate('left')
    }

    } , [new_postionX , new_posXstate])


    const textScale = useRef(new Animated.Value(1)).current
    const textRotateX = useRef(new Animated.Value(0)).current
    const textRotateY = useRef(new Animated.Value(0)).current
    const textOpacity = useRef(new Animated.Value(1)).current

    const textAnim = Animated.sequence([
        Animated.timing(textScale , {
            toValue : 3,
            duration : 2000,
            easing : Easing.cubic,
            useNativeDriver : false,
        }),
        Animated.spring(textRotateX , {
            toValue : 30,
            useNativeDriver : false,
        }),
        Animated.parallel([
            Animated.spring(textRotateY , {
                toValue : 50,
                useNativeDriver : false,
            }),
            Animated.spring(textOpacity , {
                toValue : 0,
                useNativeDriver : false,
            }),

        ]),
    ])

    //animateTextRGB
    const throwText  = useCallback( ()=>{
        console.log("text animation")
        textAnim.reset() 
        textAnim.start()
    } , [textScale])



  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.timing_container}>
        <Text>Timing</Text>
        <Animated.View
          style={[
            styles.timing_box,
            {transform: [{translateX: postionX}]},
          ]}></Animated.View>
        <Button title="change postition" onPress={changePosition} />
      </View>
      <View style={styles.timing_container}>
        <Text>Spring</Text>
        <Animated.View
          style={[
            styles.timing_box,
            {
              transform: [
                {translateX: new_postionX},
                {rotateZ: `${new_rotateX} deg`},
              ],
              borderRadius: new_postionX,
            },
          ]}></Animated.View>
        <Button title="change postition" onPress={changePositionRotation} />
      </View>
      <View style={styles.timing_container}>
        <Text>Text Animation</Text>

        <Animated.Text
        style = {[styles.text , {
            transform : [
                {scale : textScale},
                {translateX : textRotateX},
                {translateY : textRotateY},
            ],
            opacity : textOpacity,
        }]}
        
        >Hello</Animated.Text>
        <Button title="thorw away text" onPress={throwText} />
      </View>
      <View style={styles.timing_container}>
        <Text>Virbrate Button</Text>

        <Button title="Vibrate Phone" onPress={()=>Vibration.vibrate(
            30 , true
        )} />
      </View>
    </ScrollView>
  );
}

export default BasicAnimations
