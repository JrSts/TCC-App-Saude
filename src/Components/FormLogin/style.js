import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: "3%",
  },

  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: "5%",
    color: THEME.COLORS.BUTTON
  },

  containerForm: {
    flex: 5
  },
  
  button: {
    fontSize:18,
    marginTop: "8%",
    textAlign: 'center',
    color: THEME.COLORS.BUTTON,
  },

})

export default styles