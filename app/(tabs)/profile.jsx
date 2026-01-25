import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/Auth/AuthContext";
import AuthProfile from "../(auth)/AuthProfile";
import Login from "../(auth)/login";
import { useState } from "react";
import Register from "../(auth)/register";

const ProfileScreen = () => {
  const { user } = useAuth();
  const [authScreen, setAuthScreen] = useState(`login`);

  if (user) {
    return <AuthProfile />;
  }
  return authScreen === "login" ? (
    <Login onSwitch={() => setAuthScreen("register")} />
  ) : authScreen === "register" ? (
    <Register onSwitch={() => setAuthScreen("login")} />
  ) : (
    <Register />
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
