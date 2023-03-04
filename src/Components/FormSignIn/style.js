import { StyleSheet } from "react-native";
import THEME from '../../THEME'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal:'3%',
  },  
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: "5%",
    color: THEME.COLORS.BUTTON
  },

  buton: {
    textAlign: 'center',
    marginTop: "5%",
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
  }

})

export default styles