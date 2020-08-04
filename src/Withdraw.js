import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const Withdraw = ({navigation}) => {

  const [state, setValue] = useState(0)

  withDrawAmount = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      let data = [...JSON.parse(jsonValue)];
 
      if(state < 5000) {
        let val = Number(data[0].balance) - Number(state)
        data[0].balance = val;
        console.log("withDrawAmount.........",data);
        await AsyncStorage.setItem('@storage_Key', JSON.stringify(data));
        Alert.alert("Sucess");
        this.props.navigation.navigate('Home',{balance: val});
      } else {
        Alert.alert("Error","You don't have suffeciant balance");
      }
    } catch(e) {
      // error reading value
    }
  }

  return (
    <View style={styles.container}>
       <Text style={{ fontSize: 30, fontWeight:'bold'}}>Withdraw</Text>
      <View style={styles.inputView}>
        <Text style={{ fontSize: 16, fontWeight:'bold'}}>Please add amount</Text>
        <TextInput style={styles.inputs}
            // value={state}
            placeholder="999$"
            underlineColorAndroid='transparent'
            onChangeText={(loans) => setValue(loans)}/>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={withDrawAmount}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop:80,
    alignItems: 'center'
  },
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold"
  },
  inputView:{
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    marginVertical: 20,
    marginTop: 100,
  },
  inputs:{
    height:40,
    marginLeft:16,
    backgroundColor: '#FFFFFF',
    borderColor: '#51cce8',
    borderWidth: 1,
    paddingLeft:15,
    width:200,
    marginVertical: 30
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
});
