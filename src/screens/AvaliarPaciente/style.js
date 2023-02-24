const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 11,
    padding: 15,
  },

  subtitle: {
    fontSize: 20,
    top: -25,
    alignSelf:"center",
    position: "absolute"
  },

  question: {
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold"
  },

  buttonBox:{
    flex:1,
    justifyContent:"flex-end"
  },

  button: {
    botton: 15,
  }
})

export default styles