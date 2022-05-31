import React from "react";
import { StyleSheet, TextInput, TouchableOpacity} from "react-native";
import * as Colors from "../../UI/variaveis";

import { Ionicons } from "@expo/vector-icons";

export default Input = ({ campo, setValue, ocultarCampo, icon, handleAction }) => {
  return (
    <>
      <TextInput
        style={style.input}
        placeholder={campo}
        placeholderTextColor={Colors.colorGray}
        secureTextEntry={ocultarCampo}
        onChangeText={(value) => setValue(value)}
      />
      {ocultarCampo === true ? (
		  <TouchableOpacity onPress={handleAction}>
          <Ionicons
            style={{ color: Colors.colorPrimary, paddingLeft: 10, fontSize: 25 }}
            name={icon ? "eye-off" : "eye"}
          />
        </TouchableOpacity>
	  ) : null}
    </>
  );
};

export const style = StyleSheet.create({
  input: {
    width: "75%",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
