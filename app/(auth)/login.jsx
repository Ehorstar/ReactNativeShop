import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../../UI/TextInput/AppTextInput";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import Separator from "../../UI/Separator/Separator";
import { useAuth } from "../../contexts/Auth/AuthContext";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email) {
      setErrorEmail("Email is required");
    } else {
      setErrorEmail(null);
    }

    if (!password) {
      setErrorPassword("Password is required");
    } else {
      setErrorPassword(null);
    }

    if (errorEmail || errorPassword) return;

    try {
      await login({email, password});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <AppTextInput
        label="Email"
        placeholder="Введіть email"
        value={email}
        onChangeText={setEmail}
        error={errorEmail}
      />
      <AppTextInput
        label="Пароль"
        placeholder="Введіть пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={errorPassword} // тут можна передавати помилку
      />
      <Button text="Увійти" onPress={handleLogin} />
      <Separator height={26} />
      <Button
        text="Немає акаунта? Зареєструватися"
        onPress={onSwitch}
        variant="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    padding: 16,
  },
});

export default Login;
