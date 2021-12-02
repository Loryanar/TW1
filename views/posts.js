import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
 import { back } from '../api';
 import {DocumentPicker} from 'react-native-document-picker';
const Post=()=>{
    const [singleFile, setSingleFile] = useState(null);
const [state,setState]= useState({
             Username:'',
             Name:'',
             Lastname:'',
             Email:'',
             Password:'' 

         })  
         const ChangeText=(name, value)=>{
            setState({...state, [name]: value})
         }
         const selectFile = async () => {
            // Opening Document Picker to select one file
            try {
              const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.images],
              
              });
              // Printing the log realted to the file
              console.log('res : ' + JSON.stringify(res));
              // Setting the state to show single file attributes
              setSingleFile(res);
            } catch (err) {
              setSingleFile(null);
              console.log(err)
              // Handling any exception (If any)
              if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Canceled');
              } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
              }
            }
          };
   
    
 
    
         
         return(< ScrollView>

         <View>
             <Text>TWEET</Text>
             <View>
                 <TextInput placeholder='Write here'></TextInput>
             </View>
             <View>
             <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        >
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
             </View>
         </View>
            </ScrollView>
        

  
        
     );
 }
 const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    buttonStyle: {
      backgroundColor: '#307ecc',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#307ecc',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 15,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    textStyle: {
      backgroundColor: '#fff',
      fontSize: 15,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
      textAlign: 'center',
    },
  });
 export default Post;
