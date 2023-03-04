import { StyleSheet, Platform}from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  content: {
    flex: 11,
    paddingHorizontal: 15,
  },
  subtitle: {
    fontSize:20,
    top: -25,
    textAlign:"center"
  }
})

export default styles