import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    width: 100,
    height: 100,
  },
  viewLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    height: '50%',
    width: '85%',
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    borderWidth: 2,
    
    
  },
  titleInput: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  input:{
    width: '70%',
    
    borderBottomWidth: 1,
    borderColor: "#fff",
  },

});
