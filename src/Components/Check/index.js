import { View, Platform } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import styles from './style';
import THEME from '../../THEME'


export default function Check(props) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={ Platform.OS=='ios' ? styles.borda : styles.semBorda }>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {setChecked(!checked);}}
        color={THEME.COLORS.BUTTON}
      />
      props.status=true
    </View>
  )
}