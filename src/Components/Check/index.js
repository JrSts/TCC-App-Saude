import { View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import styles from './style';
import THEME from '../../THEME'

export default function Check() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.borda}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {setChecked(!checked);}}
        color={THEME.COLORS.BUTTON}
      />
    </View>
  )
}