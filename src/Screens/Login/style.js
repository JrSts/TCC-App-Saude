import { StyleSheet, Platform}from 'react-native'
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  image: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  }
})

export default styles