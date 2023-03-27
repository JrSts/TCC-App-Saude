import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  
  containerForm: {
    flex: 1,
    marginVertical: 30
  },
  
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: "5%",
    color: THEME.COLORS.BUTTON
  },
  
  isFono: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  isFonoLabelOn : {
    fontSize: 20,
    color: THEME.COLORS.BUTTON,
    fontWeight: 'bold'
  },

  isFonoLabelOff : {
    fontSize: 20,
    color: THEME.COLORS.TEXT,
    fontWeight: 'bold'
  },

  containerButton: {
    justifyContent: "flex-end",
    bottom: 15,
  }

})

export default styles