import { StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS=='android'? 15 : 0
  },

  content: {
    flex: 11,
    paddingHorizontal: 15,
  },

  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center"
  },

  containerButton: {
    height: '13%',
    justifyContent:'flex-end',
    bottom: 15,
  },

  linha: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  label: {
    fontSize: 18
  }
})

export default styles