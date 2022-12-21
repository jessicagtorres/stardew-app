import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import api, {key} from '../services/api';
import Characters from '../Characters';

export default function Routes() {
const navigation = useNavigation();
  function entrar(){
    navigation.navigate('Home')
  }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={entrar}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Entrar </Text>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2774C1',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
