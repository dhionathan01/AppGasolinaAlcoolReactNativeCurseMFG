import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, Modal } from 'react-native';
import MelhorOpcaoModal from './src/components/MelhorOpcaoModal';

export default class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      inputAlcool : 0,
      inputGasolina: 0,
      resultado: '',
      modalVisible: false
    }
    this.validaInputValue = this.validaInputValue.bind(this);
    this.handleInputAlcool = this.handleInputAlcool.bind(this);
    this.handleInputGasolina = this.handleInputGasolina.bind(this);
    this.calcularMelhorOpcao =  this.calcularMelhorOpcao.bind(this);
  }
  validaInputValue(value) {
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(value)) {
      return true;
    } else {
      this.inputAlcool = '',
        this.setState({ inputGasolina: '' }),
        this.setState({ inputAlcool : '' }),
      alert('Insira somente números e o ponto da casa decimal! Exemplo: 5.76')
      return false;
    }
  }

  handleInputAlcool(value) {
    if (this.validaInputValue(value)) {
      this.setState({ inputAlcool: value });
    }
  }

  handleInputGasolina(value) {
    if (this.validaInputValue(value)) {
      this.setState({ inputGasolina: value });
    }
  }

  calcularMelhorOpcao() {
    const alcool = parseFloat(this.state.inputAlcool);
    const gasolina = parseFloat(this.state.inputGasolina);
    if (alcool != '' && gasolina != '') {
      if (alcool / gasolina < 0.7) {
        this.setState({ resultado: 'Compensa usar Álcool' });
      } else {
        this.setState({ resultado: 'Compensa usar Gasolina' });
      }
      this.setState({ modalVisible: true });
    } else {
      alert('Preencha os campos com valores válidos!')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MelhorOpcaoModal  modalVisible={this.state.modalVisible}
              resultado={this.state.resultado}
              alcoolValue={this.state.inputAlcool}
              gasolinaValue={this.state.inputGasolina}
              onClose={() => this.setState({ modalVisible: false, inputAlcool: '',  inputGasolina : ''})} />
        <View style={styles.headerHome}>
          <View style={styles.headerLogoArea}>
            <Image source={require('./src/img/logo.png')}/>
          </View>
          <Text style={styles.headerText}>Qual melhor opção ?</Text>
        </View>

        <View style={styles.bodyHome}>
          <View style={styles.inputGroup}>
            <Text style={styles.labelInputHome}>Álcool (preço por  litro):</Text>
            <TextInput
              style={styles.inputHome}
              placeholder="R$ 0,00"
              keyboardType='number'
              value={this.state.inputAlcool}
              onChangeText={(valorAlcool) => {this.handleInputAlcool(valorAlcool)}}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.labelInputHome}>Gásolina (preço por  litro):</Text>
            <TextInput
              style={styles.inputHome}
              placeholder="R$ 0,00"
              keyboardType='number'
              value={this.state.inputGasolina}
              onChangeText={(valorGasolina) => {this.handleInputGasolina(valorGasolina)}}
            />
          </View>
          <Button title='Calcular' color={'red'} onPress={this.calcularMelhorOpcao}></Button>
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
