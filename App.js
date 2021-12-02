import React from 'react';
import {Text,View,StyleSheet} from 'react-native'; 

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 

import Register from './views/register';
import Login from './views/login';
import Post from './views/posts';

const Stack = createStackNavigator();

function MyStack() { 
  return(
    <Stack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: "#621FF7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      <Stack.Screen name="Post"
        component={Post}
        options={{ title: "Post" }}
        /> 
      <Stack.Screen name="Login"
        component={Login}
        options={{ title: "Login" }}
        /> 
        <Stack.Screen name="Register"
        component={Register}
        options={{ title: "Register" }}
        />
       
    </Stack.Navigator>
  );
}
const App =() =>{

  return(   <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );


}; 
const styles= StyleSheet.create ({
  container: {flex:1, justifyContent:"center", alignContent:"center", backgroundColor:"#292929" ,},
  tittle: {fontSize: 30}
})
 export default App;
