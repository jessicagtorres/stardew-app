import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Detail from '../Details';

export default function Characters({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Image source={{uri: data.avatar}} style={styles.avatar} />
        <Text style={styles.title}>{data.name}</Text>
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setVisibleModal(true)}>
          <Text style={styles.btnText}>Mais informações</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detail character={data} back={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0DA64F',
    margin: 15,
    elevation: 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    height: 128,
    width: 128,
    zIndex: 2,
  },
  title: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
  areaBtn: {
    alignItems: 'flex-end',
    marginTop: -60,
    marginRight: 15,
  },
  btn: {
    backgroundColor: '#D98E04',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
  },
});
