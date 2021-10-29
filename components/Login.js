import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
import Eye from  '../assets/fa-solid_eye.svg'

export default function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });
  const loadScene = () => {
    navigation.navigate('Welcome')
  }

  let [mail, changeMail] = React.useState("E-Mail");
  let [password, changePass] = React.useState("Password");

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.login}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginLogo}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeMail}
          value={mail}
        />
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            onChangeText={changePass}
            value={password}
          />
          <Eye style={{position: 'absolute', right: '12%', width: '22px', height: '16px'}} />
        </View>
        <View style={{marginTop: '8.4%', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={loadScene}>
                <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>            
        </View>
      </View>
    </View>
  )}
}
  
const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex:1
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  loginLogo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: '7%'
  },
  searchSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '84%',
    margin: 12,
    padding: '4%',
    paddingLeft: '5%',
    borderColor: '#E8E8E8',
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#8A8A8A',
    fontFamily: 'Poppins_400Regular'
  },
  button: {
    backgroundColor: '#112B66',
    marginTop: '5%',
    padding: '3.2%',
    width: '84%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500',
    fontSize: 20,
    color: 'white'
  }
})