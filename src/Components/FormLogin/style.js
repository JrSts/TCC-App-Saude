import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: "3%",
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: "5%",
    color: THEME.COLORS.BUTTON
  },

  containerButtons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: '3%',
    paddingHorizontal: '3%',
  },
  
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
    textAlign: 'center',
    color: THEME.COLORS.BUTTON,
  },

})

export default styles