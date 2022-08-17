import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Buscar from './pages/buscar';
import LocalUsuarios from './pages/localUsuarios';
import Perfil from './pages/perfil';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            
            borderTopColor: 'transparent'
          },
          activeTintColor: '#5A1223',
          tabStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          }
        }}
        initialRouteName='Home'>


        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen
          name="Buscar"
          component={Buscar}

          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="search" size={size} color={color} />
            )
          }} />

        <Tab.Screen
          name="LocalUsuarios"
          component={LocalUsuarios} 
          
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="notification" size={size} color={color} />
            )
          }}/>

        <Tab.Screen
          name="Perfil"
          component={Perfil} 
          
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="user" size={size} color={color} />
            )
          }} />


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
