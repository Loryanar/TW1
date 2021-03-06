import React ,{useState} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from 'react'
 const Login =()=>{
    const [state,setState]= useState({
        Username:'',
        
        Password:'' 

    })  
    const ChangeText=(name, value)=>{
       setState({...state, [name]: value})
    }

    const asyncStorageExamples = async () => {
        
        // getting an items
         try{ 
             const val = await AsyncStorage.getItem('key');
          if (value !== null) {
            // We have data!!
            console.log(val);
          }
        } catch (error) {
          console.log(error)
        }
        }
         
        const log= ()=>{
            fetch('https://restapi-twitterclone1.herokuapp.com/log',{
                method: 'POST',
                headers: new Headers({
     
                  'Content-Type': 'application/json'
                   }),
                body: JSON.stringify(
                    {
                  "Username":state.Username, 
                  
                  "Password":state.Password
                   })
                }).then(function (response) {
                   
                   return response.json();
                 
                }).then(function (result) { 
                  // console.log(result);
                  if(!result.error){
                   asyncStorageExamples(result),
                   alert("User register successfully ");
                   console.log('wii');
               }else{
               alert(result.error_msg);
                console.log(result);
          }
       }).catch(function (error) {
          console.log("-------- error ------- "+error);
          alert("result:"+error)
        });
        }

    const navigation = useNavigation();
    return(
         
        <ScrollView style={styles.container}>
            
              <View style={styles.inputGroup}>
                <TextInput
                  placeholder="Username"
                  onChangeText={(value) => ChangeText("Username", value)}
                 
                />
              </View>
        
              
              <View style={styles.inputGroup}>
                <TextInput
                  placeholder="Password"
                  onChangeText={(value) => ChangeText('Password',value) }
                  secureTextEntry={true}
                 
                />
              </View>
        
              <View style={styles.button}>
                <Button title="Login"  onPress={()=> log()}/>
              </View>

<View style={styles.cv}> 
              <TouchableOpacity
          title="Regist"
          onPress={() =>
            navigation.navigate('Register')
          }
        >
            <Text style={styles.buton}>
                Regist here
            </Text>
        </TouchableOpacity>
        </View>


            </ScrollView>
        
             );
         }
         const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 35,
            },
            inputGroup: {
              flex: 1,
              padding: 0,
              marginBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#cccccc",
            },
            loader: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            },
            buton: {
               color: 'blue',
                
            },
            cv:{
                alignItems: 'center',
                padding: 18,
            }
          });
 export default Login