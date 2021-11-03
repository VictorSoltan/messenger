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
  let [password, changePass] = useState("");  
  let [passwordCheck, setPassCheck] = useState(false);  
  let [passwordRepeat, changePassRepeat] = useState("");  
  let [passwordRepeatCheck, setPassRepeatCheck] = useState(false);  
  
  let [passHide, setPassHide] = useState(true);
  let [passRepeatHide, setPassRepeatHide] = useState(true);  
  
  function validate(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function registrationCheck(){
    !nickname ? setNicknameCheck(true) : setNicknameCheck(false)
    mobileNumber === '+' ? setMobileNumberCheck(true) : setMobileNumberCheck(false)
    !validate(mail) ? setMailCheck(true) : setMailCheck(false)
    !password ? setPassCheck(true) : setPassCheck(false)
    password !== passwordRepeat ? setPassRepeatCheck(true) :!passwordRepeat? setPassRepeatCheck(true) : setPassRepeatCheck(false)
  }
  
  let [employer, setEmployer] = useState(true)

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.loginLogo}>Register as a client</Text>
          <TextInput
            style={[styles.input, nicknameCheck ? {borderColor: '#E64646'} : null]}
            onChangeText={setNickname}
            value={nickname}
            placeholder={'Choose a nickname'}
          />
          <Text style={styles.label}>If you are an existing client please use the same nickname </Text>
          <TextInput
            style={[styles.input, mobileNumberCheck ? {borderColor: '#E64646'} : null]}
            onChangeText={setMobileNumber}
            value={mobileNumber}
            placeholder={'Mobile Number'}
          />
          <Text style={styles.label}>Must be connected to whats app </Text>

          <TextInput
            style={[styles.input, mailCheck ? {borderColor: '#E64646'} : null]}
            onChangeText={changeMail}
            value={mail}
            placeholder={'E-Mail'}
          />
          <View style={styles.input_n_Icon}>
            <TextInput
              style={[styles.input, passwordCheck ? {borderColor: '#E64646'} : null]}
              onChangeText={changePass}
              value={password}
              secureTextEntry={passHide}
              placeholder={'Choose a password'}
            />
            <TouchableOpacity style={{position: 'absolute', right: '6%'}} onPress={() => setPassHide(!passHide)}>
              {passHide ? 
                <Eye style={{width: '22px', height: '16px'}} /> 
                :
                <HiddenEye style={{width: '22px', height: '16px'}} /> 
              }
            </TouchableOpacity>
          </View>
          <View style={styles.input_n_Icon}>
            <TextInput
              style={[styles.input, passwordRepeatCheck ? {borderColor: '#E64646'} : null]}
              onChangeText={changePassRepeat}
              value={passwordRepeat}
              secureTextEntry={passRepeatHide}
              placeholder={'Repeat the password'}
            />
            <TouchableOpacity style={{position: 'absolute', right: '6%'}} onPress={() => setPassRepeatHide(!passRepeatHide)}>
              {passRepeatHide ? 
                <Eye style={{width: '22px', height: '16px'}} /> 
                :
                <HiddenEye style={{width: '22px', height: '16px'}} /> 
              }
            </TouchableOpacity>
          </View>          
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '98%', marginTop: '3%'}}>     
            <TouchableOpacity style={[styles.twoButtons, employer ? {backgroundColor: '#FFFFE8'} : null]} onPress={() => setEmployer(true)}>
              <Text style={[{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#000000'}, {color: '#222222'}]}>STAFF</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={[styles.twoButtons, !employer ? {backgroundColor: '#E8F4FF'} : null]} onPress={() => setEmployer(false)}>
              <Text style={[{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#000000'}, {color: '#222222'}]}>MANAGER</Text>
            </TouchableOpacity>                                 
          </View>     
        </View>
        <View style={{width: '100%', marginTop: '20%'}}>
          <BlueButton func={registrationCheck} link="Registration" title="Register" />
        </View>
        <View>
          <Text style={{alignSelf: 'flex-start', marginTop: '4%', paddingHorizontal: '6%', fontSize: 12, lineHeight: 24}}>
            By registering to this app I agree 
            <Text style={{textDecorationLine: "underline", color: '#112b66'}}>The terms and conditions of usage </Text>
            and
            <Text style={{textDecorationLine: "underline", color: '#112b66'}}> Terms of limited disclosure</Text>
          </Text>
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
  }, 
  twoButtons: {
    marginTop: 0,
    padding: '3%',
    width: '45%',
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#979797'
  },  
  stuff: {
    backgroundColor: '#FFFFE8'
  },
  manager: {
    backgroundColor: '#CCCCCC'
  }, 
})