import { StyleSheet } from "react-native";
import THEME from './../../theme';

const styles = StyleSheet.create({
    container: {
      height: "100%",
      width:"100%",
      backgroundColor:THEME.COLORS.BACKGROUNDCOLOR,
    },
  
    title: {
      alignSelf: 'center',
      paddingVertical: "5%",
      fontSize: 25,
      color: THEME.COLORS.CARD4,
      fontWeight: 'bold',
      
    },
  
    input: {
      marginHorizontal: "5%",
      backgroundColor: THEME.COLORS.PRIMARY1,
      marginBottom: 15
    },
  
    boxButtons:{
      justifyContent: 'flex-end'
    },
  
    textButton: {
      color: THEME.COLORS.PRIMARY1,
      alignSelf:"center",
      fontSize: 20,
    }
  });

  export default styles;