import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import THEME from '../../THEME'

export default function MySwitch(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.labelButton}>Configurar Alarme</Text>
      <Switch
        trackColor={{false: THEME.COLORS.GRAY, true: THEME.COLORS.BUTTON}}
        thumbColor={THEME.COLORS.BACKGROUND}
        ios_backgroundColor= {THEME.COLORS.GRAY}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}
