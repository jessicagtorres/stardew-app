import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home'
import Infos from './src/Infos';


const Stack = createStackNavigator();

export default function App() {
  
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen 
          name='Home'
          component={Home}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name='Infos'
          component={Infos}
          options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2774C1',
  },
});
