import { StyleSheet } from "react-native";
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  textBox: {
    margin: "5%",
    marginVertical: "5%",
    padding: "3%",
    backgroundColor: THEME.COLORS.CARD2,
    minHeight: 140,
    maxHeight: 140,
    fontSize: 18,
    borderRadius: 15,
    textAlignVertical: 'top',
  },

  text: {
    color: "#fff",
    fontSize: 14,
  },

  containerButton: {
    width: "90%",
    padding: "3%",
    margin:"5%",
    backgroundColor: THEME.COLORS.PRIMARY4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:"center"
  },

  textButton: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 20
  },

})

export default styles;