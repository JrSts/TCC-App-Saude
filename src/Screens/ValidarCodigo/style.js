import { StyleSheet } from "react-native";
import THEME from "../../THEME";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BUTTON,
    borderRadius:20,
  },
 
  text: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: 25, 
    textAlign: 'center',
    fontWeight: "bold"
  }, 

  button: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },

  buttonText: {
    color: THEME.COLORS.BUTTON,
    fontSize: 20
  }
 
});

export default styles