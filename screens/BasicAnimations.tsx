import React, { useCallback, useRef , useState} from 'react'
import { View, StyleSheet, Button, Animated, Easing } from 'react-native';
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
        Animated.timing(new_postionX , {
            toValue : 100,
            duration : 300 ,
            useNativeDriver : false,
            easing : Easing.circle,
        }).start()
        new_setPosXstate('right')
    }
    
    else if(new_posXstate === 'right'){
        Animated.timing(new_postionX , {
            toValue : -100,
            duration : 300 ,
            useNativeDriver : false,
            easing : Easing.linear,
        }).start()
        new_setPosXstate('left')
    }

    } , [new_postionX , new_posXstate])



  return (
    <ScrollView contentContainerStyle={styles.root}>
        <View style={styles.timing_container}>
            <Animated.View style={[styles.timing_box , {transform : [
                {translateX : postionX},

            ] }]}></Animated.View>
            <Button 
            title='change postition'
            onPress={changePosition}
            />
        </View>
        <View style={styles.timing_container}>
            <Animated.View style={[styles.timing_box , {transform : [
                {translateX : new_postionX},
                {rotateZ : `${new_rotateX} deg`},
            ],
            borderRadius : new_postionX
            
            }]}></Animated.View>
            <Button 
            title='change postition'
            onPress={changePositionRotation}
            />
        </View>

    </ScrollView>
  )
}

export default BasicAnimations
