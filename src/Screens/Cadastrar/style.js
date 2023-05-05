import { StyleSheet, Platform}from 'react-native'
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop: Platform.OS=='android'? 20 : 0
  }
})

export default styles