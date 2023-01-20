import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button'
import THEME from './../theme'

const RadioAA = () => {
  
  const [current, setCurrent] = useState("md");
 
  return (
    <View style={styles.radioContainer}>
      <Text style={styles.textQuestion}>Atribua uma nota de 1 (não resolvida) a 5 (totalmente resolvida) para essa tarefa.</Text>
      <RadioButtonGroup
        containerStyle={styles.boxRadio}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground={THEME.COLORS.CARD4}
      >
          <RadioButtonItem value="md" style={styles.circulo}
            label={<Text style={styles.textRadio}>1</Text>} />
            
          <RadioButtonItem value="d" style={styles.circulo}
            label={<Text style={styles.textRadio}>2</Text>} />

          <RadioButtonItem value="m" style={styles.circulo}
            label={<Text style={styles.textRadio}>3</Text>} />
          
          <RadioButtonItem value="f" style={styles.circulo}
            label={<Text style={styles.textRadio}>4</Text>} />
          
          <RadioButtonItem value="mf" style={styles.circulo}
            label={<Text style={styles.textRadio}>5</Text>} />
      </RadioButtonGroup>
    </View>
  )
}

const styles = StyleSheet.create({
  boxRadio: { 
    width: "90%",
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  radioContainer: {
    marginHorizontal: '5%',
    width: "90%",
  },

  circulo: {
    borderColor: THEME.COLORS.TEXT,
  },

  textQuestion: {
    fontSize: 18,
    color: THEME.COLORS.TEXT,
    padding: 5,
    fontWeight: 'bold'
  },

  textRadio: {
    fontSize: 20,
    color: THEME.COLORS.TEXT,
    padding: 5,
  },
});

export default RadioAA; 