import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export const Splash = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('SignIn');
    },20);
  },[]);

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
