import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList,
  Image,
  TextInput,
  Button,
  TouchableOpacity, 
  AsyncStorage} from 'react-native'

const Home = ({navigation, route}) => {
  return (
    <Text>Welcome {route.params['user']} back to home</Text>
  )
}

export default Home