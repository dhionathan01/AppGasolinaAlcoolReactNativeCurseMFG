import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerHome}>
          <View style={styles.headerLogoArea}>
            <Image source={require('./src/img/logo.png')}/>
          </View>
          <Text style={styles.headerText}>Qual melhor opção ?</Text>
        </View>

        <View style={styles.bodyHome}>
          <View style={styles.inputGroup}>
            <Text style={styles.labelInputHome}>Álcool (preço por  litro):</Text>
            <TextInput style={styles.inputHome} placeholder="R$ 0,00" keyboardType='number' />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.labelInputHome}>Gásolina (preço por  litro):</Text>
            <TextInput style={styles.inputHome} placeholder="R$ 0,00" keyboardType='number' />
          </View>
          <Button title='Calcular' color={'red'}></Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerHome: {
    flex: 1,
    alignItems: 'center',
    top: 120,
  },
  bodyHome: {
    flex: 1,
    padding: 20,
  },
  headerLogoArea: {
    marginBottom: 30,
  },
  headerText: {
    color: '#F1F1F1',
    fontSize: 23,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  labelInputHome: {
    color: '#F1F1F1',
    fontSize: 16,
    marginBottom: 10,
  },
  inputHome: {
    backgroundColor: '#FFF',
    height: 45,
    padding: 5,
    borderRadius: 5,

  }
});
