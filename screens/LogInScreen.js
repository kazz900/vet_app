import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function LoginScreen() {
  const [userAccount, setUserAccount] = useState("");
  const [userPws, setUserPws] = useState("");
  const [data, setData] = useState("");

  function userAccountInputHandler(inputAccount) {
    setUserAccount(inputAccount);
  }

  function userPwdInputHandler(inputPwd) {
    setUserPws(inputPwd);
  }

  function loginButtonHandler() {
    useEffect(() => {
      const apiUrl = 'http://mpb.mynetgear.com:7001/login';

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => console.log(error))
    }, []);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={userAccountInputHandler}
        value={userAccount}
        placeholder="아이디를 입력해주세요."
      />
      <TextInput
        style={styles.textInput}
        onChangeText={userPwdInputHandler}
        placeholder="비밀번호를 입력해주세요."
        value={userAccount}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={loginButtonHandler}>LOG IN</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#acacac",
    borderRadius: 8,
    padding: 8,
    marginVertical: 10,
    width: "80%",
    height: 50,
    backgroundColor: "#acacac",
    color: "white",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    width: '40%'
  },
});
