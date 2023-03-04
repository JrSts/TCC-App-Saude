import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: THEME.COLORS.INPUT,
    padding: 15,
    borderRadius: 20,
    minHeight: 150,
    maxHeight: 150,
    height: 150,
  },

  input: {
    fontSize: 20,
    

  }
})

export default styles