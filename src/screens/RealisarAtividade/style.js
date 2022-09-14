import { StyleSheet } from "react-native";
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
  },

  info: {
    marginLeft: "5%",
    marginTop: "2%",
  },
  infoText: {
    fontSize: 16,
  },

  textButton: {
    color: THEME.COLORS.PRIMARY1,
    fontSize: 18
  },

  textBox: {
    width: "90%",
    height: "21%",
    padding: "3%",
    marginTop:"3%",
    marginHorizontal:"5%",
    fontSize: 18,
    backgroundColor: THEME.COLORS.CARD2,
    borderRadius: 15,
  },

  containerTask: {
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "4%",
      width: "90%",
      marginHorizontal: "5%",
      marginTop: "3%",
      backgroundColor: THEME.COLORS.CARD4,
      borderRadius: 15
    },
  
    textTask: {
      color: THEME.COLORS.PRIMARY1,
      fontSize: 18
    },
    
    button: {
      padding: "4%",
      width: "90%",
      marginHorizontal: "5%",
      marginTop: "5%",
      backgroundColor: THEME.COLORS.PRIMARY4,
      borderRadius: 15
    },

    textButton: {
      color: THEME.COLORS.PRIMARY1,
      fontSize:18,
    },
});
  
export default styles;