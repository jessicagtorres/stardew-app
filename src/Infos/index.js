import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import api, {key} from '../services/api';
import Characters from '../Characters';

export default function Infos() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get(`api/heydies/characters?token=${key}`);
      console.log(response.data);
      setCharacters(response.data);
      setLoading(false);
    }

    loadCharacters();
  }, []);

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={characters}
          //keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Characters data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2774C1',
  },
});
