import { StyleSheet, Platform}from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  content: {
    flex: 11,
  },

  img: {
    top: -50,
    left: 15,
    position: "absolute",
  }

})

export default styles