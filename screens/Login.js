

import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList,
  Image,
  TextInput,
  Button,
  TouchableOpacity, 
  AsyncStorage} from 'react-native'
import {Card, FAB} from 'react-native-paper'
import { StatusBar } from "expo-status-bar";
import { BASE_URL } from '../link_api/meta';

const Login = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const check_signin = (props) => {
    fetch(BASE_URL+'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:email, password:password})
    })
    .then((resp) => {
      return resp.json();
    })
    .then((jsonData) => {
      console.log(JSON.stringify(jsonData));
      if(jsonData['result'] == true){
        alert("You are: "+jsonData['user']);
        navigation.navigate('Home', jsonData)
      }
      else{
        alert("Wrong username or password. Try again");
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
        {/* <Image style={styles.image} source={require('./assets//logo.png')} /> */}
      <Text style={styles.titile}>Smart Home</Text> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}
      onPress = {() => check_signin()}
      ><Text>Login</Text>
      </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        justifyContent: "center",
        marginBottom: 20,
      },
      inputView: {
        backgroundColor: "#d6e6f2",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#769fcd",
      },
      titile:{
        marginBottom: 50,
        fontSize: 40,
        alignItems: "center",
        fontWeight: 500,
      }
})
export default Login