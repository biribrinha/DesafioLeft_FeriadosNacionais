import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Buscar from './pages/buscar';
import LocalUsuarios from './pages/localUsuarios';
import Perfil from './pages/perfil';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Buscar" component={Buscar}/>
        <Tab.Screen name="LocalUsuarios" component={LocalUsuarios}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
        
      </Tab.Navigator>
      
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
