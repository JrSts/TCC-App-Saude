import { StyleSheet } from "react-native";
import THEME from './../../theme';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: "center",
    color: THEME.COLORS.CARD4
  },

  textBox: {
    padding: "5%",
    margin:"5%",
    minHeight: 140,
    maxHeight: 140,
    textAlignVertical: 'top',
    fontSize: 18,
    backgroundColor: THEME.COLORS.CARD2,
    borderRadius: 15,
  },

  inputName:{
    marginTop: "3%",
    marginHorizontal:"5%",
    fontSize: 18,
    backgroundColor: THEME.COLORS.CARD2,
    borderRadius: 15,
  },

  label: {
    paddingHorizontal: "5%",
    fontSize: 18,
    color: THEME.COLORS.CARD4
  },

  ContainerCheckBox: {
    paddingHorizontal:"5%",
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: "1%",
  },

  buttons: {
    justifyContent: 'flex-end',
    height: "10%",
    marginBottom: "5%",
  },

});

export default styles;