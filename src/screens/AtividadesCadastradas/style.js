import { StyleSheet } from "react-native";
import THEME from './../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  button: {
    padding: "4%",
    marginHorizontal:"5%",
    alignItems:'center',
    margin: '2,5%',
    backgroundColor: THEME.COLORS.CARD4,
    borderRadius: 15,
  },

  textButton: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 20,
  },
})

export default styles;