import React, { useCallback } from 'react'
import { Button, StyleSheet, View , Text, AnimatableNumericValue} from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle , withSequence , useSharedValue, withClamp, withDecay, withRepeat, withSpring, withTiming, ReduceMotion, AnimatableValue, withDelay } from 'react-native-reanimated'

const ReanimatedAnimations = () => {

    const size = useSharedValue(100);

    const enlargeBox = useCallback(()=> {
        size.value = withSpring(size.value+50);
    } ,[size])

    const slideValue = useSharedValue<AnimatableValue>(0);

    const animatedTiming = useAnimatedStyle(
      () => ({
        transform: [
          {
            translateX: withClamp<number>(
              {
                min: -100,
                max: 100,
              },
              withSpring<number>(Number(slideValue.value), {
                damping: 10,
                overshootClamping : true,
                reduceMotion: ReduceMotion.System,
                
              }),
            ),
          },
        ],
      }),
      [slideValue],
    );


    const panGesture = Gesture.Pan()
    .onBegin((event)=>{
        // slideValue.value = event.translationX
    }).onChange((event)=>{
        slideValue.value = event.translationX
    }).onFinalize((event)=>{

        if (event.translationX < -100 ) slideValue.value = -100
        else if (event.translationX > 100 ) slideValue.value = 100
        else slideValue.value = 0;
    })



    const repeatAnim  = useAnimatedStyle(()=>({
        transform : [
            {translateX : withRepeat(withSequence(
                withTiming(-100 , {
                duration : 1000,
                }),
                withTiming(100,{
                  duration : 1000,  
                })
        ) , -1 , true)}
        ]
    }))


  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.root}>
        <View style={styles.animContainer}>
            <Text style= {styles.text} >  Spring Animation  </Text>
            <Animated.View style={[styles.sizeanim , {
                // height : size ,
                width : size,
            }]}>
            </Animated.View>

            <Button  onPress={enlargeBox} title='Enlarge' />

        </View>
        <View style={styles.animContainer}>
            <Text style= {styles.text} >  Slide this box  </Text>
            <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.sizeanim  , animatedTiming ]}>
            </Animated.View>
            </GestureDetector>

        </View>
        <View style={styles.animContainer}>
            <Text style= {styles.text} >  Repeating Animation  </Text>
            <Animated.View style={[styles.sizeanim , repeatAnim]}>
            </Animated.View>

        </View>

    </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    root:{
        flex : 1,
        gap : 20,
    },
    animContainer:{
        gap : 20 ,
        padding : 10,
        alignItems : 'center',
    },
    sizeanim:{
        width : 100,
        height : 100 ,
        backgroundColor : 'orange',
        borderRadius : 10 ,
    },
    text:{
        fontSize : 20,
    }
})

export default ReanimatedAnimations