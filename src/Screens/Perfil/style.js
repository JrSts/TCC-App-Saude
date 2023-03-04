import { StyleSheet, Platform}from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS=='android'? 20 : 0
  },
  content: {
    flex: 11,
    paddingTop: 40,
    alignItems:"center"
  }
})

export default styles