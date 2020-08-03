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
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");
import AsyncStorage from '@react-native-community/async-storage';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      number: '',
      address: '',
      password: '',
      c_password: '',
    }
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, number INT,address TEXT,password TEXT , c_password TEXT)'
      )
    })
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onSignUpClick = () =>{
    this.props.navigation.navigate('SignIn');
  }

  SignUpClick =() =>{
    
  }

  CreateUser = () => {

    if(this.state.email && this.state.name  && this.state.city &&  this.state.number  && this.state.address && 
      (this.state.password === this.state.c_password) ){
      db.transaction(
        tx => {
          tx.executeSql("insert into data (email, name, number, address, password,c_password) values (?, ?, ? ,?, ?, ?)", [this.state.email, this.state.name,  this.state.number,this.state.address, this.state.password, this.state.c_password]);
          tx.executeSql("select * from data", [], async (_, { rows }) => {
              const jsonValue = JSON.stringify(rows.item(rows.length - 1));
              await AsyncStorage.setItem('@storage_Key', jsonValue);
              console.log("Database..............?",jsonValue);
            }
          );
        },
        null
      );
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert("Error", "Please Enter all fields")
    }
  }

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
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(c_password) => this.setState({c_password})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>


        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="City"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(city) => this.setState({city})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Phone Number"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(number) => this.setState({number})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Address"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(address) => this.setState({address})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.CreateUser}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={this.onSignUpClick}>
            <Text>Sign In</Text>
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