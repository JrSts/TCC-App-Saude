import { StyleSheet, Platform}from 'react-native'
import THEME from "../../THEME";


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    paddingTop: Platform.OS=='android'? 20 : 0
  },

  content: {
    flex: 11,
    marginTop: 10
  }
})

export default styles