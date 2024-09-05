import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity,View, Image, Modal } from 'react-native';

export default class MelhorOpcaoModal extends Component{
    constructor(props) { 
        super(props);
    }

    render() {
        const { modalVisible, resultado, alcoolValue, gasolinaValue, onClose } = this.props;
        
        const formattedAlcoolValue = parseFloat(alcoolValue).toFixed(2);
        const formattedGasolinaValue = parseFloat(gasolinaValue).toFixed(2);
        return (
            <Modal visible={modalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <View style={styles.headerImagemArea}>
                            <Image source={require('../../img/gas.png')} />
                        </View>
                        <Text style={styles.mensagemHeader}>{resultado }</Text>
                    </View>
                    <View style={styles.modalBody}>
                        <Text style={styles.textModalBodyLarge}>Com os preços:</Text>
                        <Text style={styles.textModalBody}>Álcool: R$ {formattedAlcoolValue }</Text>
                        <Text style={styles.textModalBody}>Gasolina: R$ {formattedGasolinaValue }</Text>
                        <TouchableOpacity style={styles.btnCalcularNovamente} title='Calcular novamente' onPress={onClose}>
                            <Text style={styles.btnLabel}>Calcular Novamente</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#000'
    },
    modalLabel: {
        color: '#F1F1F1',
        fontSize: 16,
        marginBottom: 10,
    },
    modalHeader: {
        flex: 1,
        alignItems: 'center',
        top: 120,
    },
    mensagemHeader: {
        color: '#65C979',
        fontSize: 34,
        fontWeight : 'bold',
        top: 40,
    },
    modalBody: {
        flex: 1,
        alignItems: 'center'
    },
    textModalBody: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 5
    },
    textModalBodyLarge: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    btnCalcularNovamente: {
        padding: 5,
        width: '80%',
    },
    btnLabel: {
        padding: 8,
        fontSize: 26,
        color: 'red',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})