import { StyleSheet } from "react-native"
import THEME from "../../THEME"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: Platform.OS=='android'? 20 : 0
    },

    content: {
      flex: 11,
      marginHorizontal: 15
    },

    subtitle: {
    fontSize: 18,
    textAlign: "justify"
    },

    containerItem: {
        backgroundColor: THEME.COLORS.INPUT,
        padding: 15,
        marginVertical: 10,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerButtons: {
      flexDirection: "row",
      alignItems: "center"
    },
    titleItem: {
        fontSize:18,
        fontWeight: "bold",
        color: THEME.COLORS.BUTTON
    },

    subtitleItem: {
        fontSize:15,

    },

    buttom: {
        marginLeft: 20
    }
})

export default styles