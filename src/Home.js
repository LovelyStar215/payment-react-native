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

export default class Home extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      name: '',
      city:'',
      number:'',
      address:'',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onSignUpClick = () =>{
    this.props.navigation.navigate('SignIn');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:'20%',width:'100%',  justifyContent: 'space-between', borderColor:'gray',
              borderWidth:2,
              marginTop: 5,
              padding:5}}>
        <Text style={{ fontSize: 30, fontWeight:'bold'}}>Quik Links</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Image style={styles.inputIcon} source={require('../assets/logo.jpg')}/>
        <Image style={styles.inputIcon} source={require('../assets/logo.jpg')}/>
        <Image style={styles.inputIcon} source={require('../assets/logo.jpg')}/>
        </View>
        </View>


        <View style={{
                height:'40%',
                width:'100%',
                borderColor:'gray',
                borderWidth:2,
                marginTop: 5,
                padding:5}}>
            <Text style={{ fontSize: 30, fontWeight:'bold'}}>Account Summary</Text>
            <View style={styles.inputView}>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>Account  :</Text>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>2000$</Text>

            </View>
            <View style={styles.inputView}>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>Balance  :</Text>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>2000$</Text>
            </View>
            <View style={styles.inputView}>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>Loans  :</Text>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>2000$</Text>
            </View>
            <View style={styles.inputView}>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>Investment:</Text>
              <Text style={{ fontSize: 16, fontWeight:'bold'}}>2000$</Text>
            </View>
          </View> 
          <View style={{height:'20%',width:'100%', 
              borderColor:'gray',
              borderWidth:2,
              marginTop: 5,
              padding:5 }}>
          <Text style={{ fontSize: 30, fontWeight:'bold'}}>Saving Goal</Text>
          <View style={{height:'50%',
          width:'90%',
           justifyContent:'center',
             alignItems: 'center',
              backgroundColor:'gray',
               marginLeft:15, marginTop: 15  }}>
          <Text style={{ fontSize: 15, fontWeight:'bold'}}>Create a goal</Text>
          </View>
          </View>
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
    padding:15
  },
  inputView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    marginVertical: 20,
    marginHorizontal: 20,
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
  inputIcon:{
    width:80,
    height:80,
    marginLeft:15,
    marginBottom:35,
    justifyContent: 'center',
    borderRadius:40,
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
  },
  inputs:{
    height:40,
    marginLeft:16,
    backgroundColor: '#FFFFFF',
    borderColor: '#51cce8',
    borderWidth: 1,
    paddingLeft:15,
    width:200,
  },
});