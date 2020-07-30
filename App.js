import React from 'react';
import { useWindowDimensions } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text} from 'react-native';
import { Splash } from './src/Splash';
import  SignIn  from './src/SignIn';
import  SignUp  from './src/SignUp';
import  Home  from './src/Home';
import  { Deposit }  from './src/Deposit';
import  { Withdraw }  from './src/Withdraw';
import  { Transfer }  from './src/Transfer';


enableScreens();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


 function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Deposit" component={Deposit} />
      <Drawer.Screen name="Withdraw" component={Withdraw} />
      <Drawer.Screen name="Transfer" component={Transfer} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen name="SignIn" component={SignIn}
        options={({ navigation }) => ({
          headerLeft: () =>  <></>,
        })}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={DrawerScreen}
        options={({ navigation }) => ({
          headerLeft: () => { 
            return  <AntDesign name="menuunfold" size={24} color="black" 
            onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}/>
          },
          headerRight: () => { 
            return  <TouchableOpacity  onPress={()=>navigation.navigate('SignIn')}>
              <Text>Logout</Text>
              </TouchableOpacity>
          },
        })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
