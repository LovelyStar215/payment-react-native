import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Please Call this number to reset your password +9200000000000");
  }
  onSignUpClick = () =>{
    this.props.navigation.navigate('SignUp');
  }


  onSignInClick = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'select * from user where email = ?',
        [this.state.email],
        async (tx, { rows: { _array } }) => {
          if (this.state.password === _array[0]?.password  ) {
            await AsyncStorage.setItem('@storage_Key', JSON.stringify(_array));
            this.props.navigation.navigate('Home');
          } else {
            Alert.alert('Error','Please Provide correct email or passowrd');
          }
        }
      );
    });
  };


  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.inputIcon} source={require('../assets/logo.jpg')}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={require('../assets/logo.jpg')}/> */}
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onSignInClick}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={this.onSignUpClick}>
            <Text>Create your account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
    height:50,
    marginLeft:16,
    backgroundColor: '#FFFFFF',
    borderColor: '#51cce8',
    borderWidth: 1,
    borderRadius:30,
    paddingLeft:15,
    width:250,
  },
  inputIcon:{
    width:100,
    height:100,
    marginLeft:15,
    marginBottom:35,
    justifyContent: 'center',
    borderRadius:50,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});