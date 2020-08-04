import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const Splash = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      this.isLogin();
    },3000);
  },[]);


  isLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if(value === null) {
         navigation.navigate('SignIn');
      }else {
        navigation.navigate('Home');
      }
    } catch(e) {
      console.log("error...",e);
    }
  }
  return (
    <View style={styles.container}>
    <ImageBackground 
      source={require('../assets/logo.jpg')}
      style={styles.image}>
      <Text style={styles.text}>Payment</Text>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold"
  }
});
