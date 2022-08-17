import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Perfil(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
        source={require('./img/user.png')}
      />
        <Text style={{ color: '#678486' }}>Alicia da Silva</Text>
        <Text>18 anos</Text>
        <Text>alicia.silva13@gmail.com</Text>
      </View>
    );
}