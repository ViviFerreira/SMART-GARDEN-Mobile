import { StyleSheet } from "react-native";



export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    header:{
        flex: 1,
        maxHeight: "70%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    gif:{
        marginBottom: "60%",
    },
    form:{
        flex:1,
        alignItems: "center",
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#078007",
    },
    formImage:{
        width: "40%",
        height: "40%",
    },
    formText:{
        fontSize: 50,
        fontWeight: "bold",
        paddingTop: 10,
        color: "#fff",
    },
    formSubText:{
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
        paddingBottom: 30,
    },
    formButton:{
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#078007",
    },
    formButtonText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#078007",
    }
});