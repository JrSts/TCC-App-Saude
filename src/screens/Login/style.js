import { StyleSheet } from "react-native";
import THEME from './../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUNDCOLOR     
  },
  
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "stretch"
  },

  title:{
    fontWeight: "bold",
    fontSize: 22,
    color: THEME.COLORS.CARD1,
    paddingVertical: "3%",
    justifyContent: "center",
    textAlign: "center"
  },

  inputContainer: {
    marginHorizontal: '5%',
    justifyContent:"space-between"
  },

  buttoncEsqueceuSenha: {
    marginHorizontal: '5%',
    flexDirection: "row",
    justifyContent:"space-between",
  },

  divisoria: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%'
  },

  textButtons: {
    color: 'blue',
    paddingVertical:"2%",

  },

  containerButton: {
    marginHorizontal: '5%',
  },

  buttonLogar:{
    width: "100%",
    backgroundColor: THEME.COLORS.CARD1,
    marginTop:"2%",
    padding: "2%",
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonLogarGmail:{
    width: "45%",
    backgroundColor: 'red',
    marginTop:"5%",
    padding: "4%",
    borderRadius: 15,
  },

  buttonLogarFacebook:{
    width: "45%",
    backgroundColor: '#000099',
    marginTop:"5%",
    padding: "4%",
    borderRadius: 15,
  },

  textLogar: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 20,
    textAlign: "center"
  }

})

export default styles;