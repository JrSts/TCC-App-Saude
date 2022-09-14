import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import THEME from './../theme'

const ButtonsOkCancel = () => {
    return (
      <View style={styles.buttonsContainer}> 
        <TouchableOpacity style={styles.buttonCancelar}>
          <Text style={styles.buttonText}> Cancelar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonConcluir}>
        <Text style={styles.buttonText}> Concluir </Text>
        </TouchableOpacity>
      </View>
    )
  }

export default ButtonsOkCancel;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "90%",
    height: 50,
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: "5%"
  },

  buttonConcluir:{
    width:"45%",
    backgroundColor: THEME.COLORS.BUTTONOK,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center'
  },

  buttonCancelar:{
    width:"45%",
    backgroundColor: THEME.COLORS.BUTTONCANCEL,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center'
  },

  buttonText: {
    fontSize: 20,
    color: THEME.COLORS.PRIMARY1
  }
})