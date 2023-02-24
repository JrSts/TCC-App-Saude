import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: THEME.COLORS.INPUT,
    padding: 15,
    borderRadius: 20,
    height: '30%',
    marginBottom: 15,
  },

  msg: {
    fontSize: 16,
  }  
})

export default styles