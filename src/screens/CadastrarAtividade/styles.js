const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },
  content: {
    flex: 11,
    paddingHorizontal: "3%",
  },

  subtitle:{
    top: -25,
    textAlign: "center",
    fontSize: 18
  },

  caracteristicas: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: 18,
  }

  
})

export default styles