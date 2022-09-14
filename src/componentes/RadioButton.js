import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button'
import THEME from './../theme'

const Radio = () => {
  
  const [current, setCurrent] = useState("diario");
 
  return (
    <View style={styles.radioContainer}>
      <RadioButtonGroup
        containerStyle={styles.boxRadio}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground= {THEME.COLORS.CARD4}
      >
          <RadioButtonItem value="diario" style={styles.circulo}
            label={<Text style={styles.textRadio}>Diário</Text>} />
            
          <RadioButtonItem value="semanal" style={styles.circulo}
            label={<Text style={styles.textRadio}>Semanal</Text>} />
      </RadioButtonGroup>
    </View>
  )
}

const styles = StyleSheet.create({
  boxRadio: { 
    padding: "5%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  circulo: {
    borderColor: THEME.COLORS.PRIMARY3
  },

  radioContainer: {
    width: "70%",
  },

  textRadio: {
    paddingHorizontal: "5%",
    fontSize: 18,
    color: THEME.COLORS.CARD4
  },
});

export default Radio; 