import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detail(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnBack} onPress={props.back}>
          <Text style={{color: '#100940', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{props.character.name}</Text>
        <Text style={styles.subtitle}>Aniversário:</Text>
        <Text style={styles.info}>{props.character.bday}</Text>
        <Text style={styles.subtitle}>Melhores presentes:</Text>
        <Text style={styles.info}>{props.character.favThing}</Text>
        <Text style={styles.subtitle}>Piores presentes:</Text>
        <Text style={styles.info}>{props.character.hateThing}</Text>
        <Text style={styles.subtitle}>Endereço:</Text>
        <Text style={styles.info}>{props.character.address}</Text>
        <Text style={styles.subtitle}>Relacionamento:</Text>
        <Text style={styles.info}>{props.character.relationship}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    marginTop: 154,
    width: '98%',
    height: '90%',
    backgroundColor: '#025959',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnBack: {
    backgroundColor: '#F2CB05',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    //marginBottom: 8,
    marginLeft: 10,
    marginTop: 10,
  },
  info: {
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
  },
});
