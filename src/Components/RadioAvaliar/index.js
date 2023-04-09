import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper'
import styles from './style'
import THEME from '../../THEME'

export default function RadioAvaliar(props) {
  const [checked, setChecked] = useState('Muito Difícil')
  const item = props.item

  useEffect(() => {
    
  }, [])
  

  return (
    <View>
      <TouchableOpacity onPress={() => {setChecked('Muito Difícil')}} style={styles.linha}>
        <Text style={styles.label}>Muito Difícil</Text>
        <RadioButton
          value="Muito Difícil"
          status={ checked === 'Muito Difícil' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Muito Difícil')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setChecked('Dificil')}} style={styles.linha}>
        <Text style={styles.label}>Dificil</Text>
        <RadioButton
          value="Dificil"
          status={ checked === 'Dificil' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Dificil')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setChecked('Regular')}} style={styles.linha}>
        <Text style={styles.label}>Regular</Text>
        <RadioButton
          value="Regular"
          status={ checked === 'Regular' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Regular')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setChecked('Fácil')}} style={styles.linha}>
        <Text style={styles.label}>Fácil</Text>
        <RadioButton
          value="Fácil"
          status={ checked === 'Fácil' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Fácil')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setChecked('Muito Fácil')}} style={styles.linha}>
        <Text style={styles.label}>Muito Fácil</Text>
        <RadioButton
          value="Muito Fácil"
          status={ checked === 'Muito Fácil' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Muito Fácil')}
          color={THEME.COLORS.BUTTON}
        />
      </TouchableOpacity>
    </View>
  )
}