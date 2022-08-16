import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function App(){
  let [local, setLocal] = useState({
    latitude: -23.4422149,
    longitude: -46.9235461,
    latitudeDelta: 0.14,
    longitudeDelta: 0.14
  });

  return(
    <View style={styles.container}>
      <MapView style={{width:'100%', height:'100%'}} initialRegion={local}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})