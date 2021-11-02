import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Eye from  '../assets/fa-solid_eye.svg'
import HiddenEye from  '../assets/hiddenEye.svg'


import BlueButton from "../components/BlueButton";

export default function DateEvents({ navigate }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  }); 

  let [nickname, setNickname] = useState("");
  let [nicknameCheck, setNicknameCheck] = useState(false);
  let [mobileNumber, setMobileNumber] = useState("+");
  let [mobileNumberCheck, setMobileNumberCheck] = useState(false);

  let [mail, changeMail] = useState("");
  let [mailCheck, setMailCheck] = useState(false);
  
  function registrationCheck(){
    !nickname ? setNicknameCheck(true) : setNicknameCheck(false)
    mobileNumber === '+' ? setMobileNumberCheck(true) : setMobileNumberCheck(false)
    !validate(mail) ? setMailCheck(true) : setMailCheck(false)
    !password ? setPassCheck(true) : setPassCheck(false)
    password !== passwordRepeat ? setPassRepeatCheck(true) :!passwordRepeat? setPassRepeatCheck(true) : setPassRepeatCheck(false)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.loginLogo}>Add booking</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNickname}
              value={nickname}
              placeholder={'Date'}
            />
            <TextInput
              style={styles.input}
              onChangeText={changeMail}
              value={mail}
              placeholder={'Time'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setMobileNumber}
              value={mail}
              placeholder={'Dutan'}
            />              
            <TextInput
              style={styles.input}
              onChangeText={setMobileNumber}
              value={mail}
              placeholder={'Name'}
            />    
            <TextInput
              style={styles.input}
              onChangeText={setMobileNumber}
              value={mobileNumber}
              placeholder={'Mobile Number'}
            />                            
          </View>
          <View style={{position: 'absolute', width: '100%', bottom: '10%'}}>
            <BlueButton link="Registration" title="Save" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}    

const styles = StyleSheet.create({
  container: { 
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingTop: '18%',
    paddingHorizontal: '6%',
  },   
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  loginLogo: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    marginBottom: '4%'
  },  
  label: {
    alignSelf: 'flex-start',
    fontSize: 11,
    marginTop: '-1.4%',
    marginBottom: '3%',
    marginLeft: '1%'
  },
  input_n_Icon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    margin: 12,
    fontSize: 16,
    padding: '3%',
    paddingLeft: '5%',
    borderColor: '#E8E8E8',
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#8A8A8A',
    fontFamily: 'Poppins_400Regular',
    marginBottom: '2%'
  }
})