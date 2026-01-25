import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../../UI/TextInput/AppTextInput";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import Separator from "../../UI/Separator/Separator";
import { useAuth } from "../../contexts/Auth/AuthContext";

const Register = ({ onSwitch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const { register, login } = useAuth();

  const handleRegister = async () => {
    if (!name) {
      setErrorName("Name is required");
    } else {
      setErrorName(null);
    }

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

    if (!email || !password || !name) return;

    try {
      await register({name, email, password});
      await login({email, password});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <AppTextInput
        label="Name"
        placeholder="Введіть ім'я'"
        value={name}
        onChangeText={setName}
        error={errorName}
      />
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
      <Button text="Зареєструватися" onPress={handleRegister} />
      <Separator height={26} />
      <Button
        text="Вже маєте акаунт? Увійти"
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

export default Register;
