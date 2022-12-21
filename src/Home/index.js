import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../images/stardewvalley.png')} />

      <Image source={require('../images/junimo.png')} style={styles.img} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Infos')}>
        <Image
          source={require('../images/entrar.png')}
          height="50%"
          width="50%"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2774C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 138,
  },
  btn: {
    backgroundColor: '#CBA10E',
    width: 143,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 73,
    borderRadius: 5,
  },
});
