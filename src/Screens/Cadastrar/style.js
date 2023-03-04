import { StyleSheet, Platform}from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS=='android'? 20 : 0
  }
})

export default styles