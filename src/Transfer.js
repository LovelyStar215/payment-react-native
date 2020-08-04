import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export const Transfer = ({navigation}) => {

  const [state, setState] = useState('')

  const onSubmit= ()=>{

  }

  return (
    <View style={styles.container}>
       <Text style={{ fontSize: 30, fontWeight:'bold'}}>Transfer</Text>
      <View style={styles.inputView}>
        <Text style={{ fontSize: 16, fontWeight:'bold'}}>Account No:</Text>
        <TextInput style={styles.inputs}
            value={state}
            placeholder="999$"
            underlineColorAndroid='transparent'
            onChangeText={(loans) => setState({loans})}/>
        <Text style={{ fontSize: 16, fontWeight:'bold'}}>Amount</Text>
        <TextInput style={styles.inputs}
            value={state}
            placeholder="999$"
            underlineColorAndroid='transparent'
            onChangeText={(loans) => setState({loans})}/>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={onSubmit}>
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
