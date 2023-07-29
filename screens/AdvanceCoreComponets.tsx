import { FC } from "react";
import { Button, View } from "react-native";
import { Text } from "react-native-svg";


const AdvanceCoreComponets:FC = ({navigation})=> {
  return (
    <View style={{flex:1 }}>
        <Text>Advance components </Text>
        <Button title="Go Back" onPress={()=>navigation.navigate("Core Components")} />
        <Text>Advance components </Text>
    </View>
  )
}

export default AdvanceCoreComponets;