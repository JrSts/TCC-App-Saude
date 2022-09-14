import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import THEME from './../theme'
import { useNavigation} from '@react-navigation/native'

function Paciente(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.boxName}>
        <Text style={styles.text}>{props.name} {props.lastName}</Text>
      </View>

      <View style={styles.boxAge}>
        <Text style={styles.text}>{props.age} anos</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AtividadesCadastradas')}>
          <Text style={styles.text}>Acessar</Text>
        </TouchableOpacity>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    marginBottom: "1%",
    backgroundColor: THEME.COLORS.PRIMARY2,
    justifyContent: 'center'
  },
  
  text:{
    fontSize: 15,
    color: THEME.COLORS.PRIMARY1,
    justifyContent: 'center',

  },

  boxName: {
    width: "31%",
    height: 50,
    backgroundColor: THEME.COLORS.PRIMARY2,
    justifyContent:'center',
  },

  boxAge: {
    marginHorizontal: '1%',
    width: "31%",
    height: 50,
    alignItems:  'center',
    justifyContent:'center',
    backgroundColor: THEME.COLORS.PRIMARY3,
  },

  buttonContainer: {
    width: "30%",
    height: 50,
    backgroundColor: THEME.COLORS.PRIMARY2,
    justifyContent:'center',
  },

  button: {
    padding: '8%',
    margin: 7,
    backgroundColor: 'blue',
    justifyContent:'center',
    borderRadius: 50,
    alignItems: 'center'
  }

});

export default Paciente;