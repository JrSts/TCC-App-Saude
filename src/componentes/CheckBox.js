import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import THEME from './../theme'

const Check = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.contorno}> 
      <Checkbox
        color={THEME.COLORS.CARD4}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>    
  )
}

const styles = StyleSheet.create({
  contorno: {
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PRIMARY1,
    marginVertical: "1.5%",

  },

  espacamento:{
    marginBottom: "10%",
  }
});

export default Check;