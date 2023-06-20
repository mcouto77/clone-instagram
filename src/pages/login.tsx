import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />

      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        placeholder="Celular, Username ou Email"
        style={styles.input}
      />

      <TextInput placeholder="Sua Senha" style={styles.input} />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>Continue como Marcelo Abbadia</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: "3%" }}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButtom}> Cadastra-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS === "android" ? "13%" : "20%",
    marginBottom: Platform.OS === "android" ? "13%" : "15%",
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#F4F3F3",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#399fff",
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#399fff",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "#FFF",
    fontSize: 17,
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
  },
  facebookText: {
    color: "#399fff",
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: "10%",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  divisorLine: {
    width: "45%",
    height: 2,
    backgroundColor: "#EFEDED",
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  signUpText: {
    color: "#C4C4C4",
    paddingRight: 5,
  },
  signUpButtom: {
    color: "#399fff",
    fontWeight: "bold",
  },
});
