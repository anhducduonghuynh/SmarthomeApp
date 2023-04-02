import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Login from './components/Login';

export default function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
      <Login/>
  );
}