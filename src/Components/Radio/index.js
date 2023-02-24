import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import styles from './style';
import THEME from '../../THEME'

export default function PeriodicidadeAtividade() {
  const [checked, setChecked] = useState('Diário');

  return (
    <View>
      <TouchableOpacity onPress={() => {setChecked('Diário')}} style={styles.linhaSuperior}>
        <Text style={styles.label}>Diário</Text>
        <RadioButton
          value="Diário"
          status={ checked === 'Diário' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Diário')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setChecked('Semanal')}} style={styles.linhaInferior}>
        <Text style={styles.label}>Semanal</Text>
        <RadioButton
          value="Semanal"
          status={ checked === 'Semanal' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Semanal')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
    </View>
  )
}