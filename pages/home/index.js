import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';



export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Image
        source={require('./img/ilustração_home.png')}
      />
      <Text style={{ color: '#94162D', fontSize: 35 }}>Feriado = folga!</Text>
      <Text style={{ color: '#678486', fontSize: 20 }}>Saiba quando serão suas próximas folgas</Text>

    </View>
  );
}