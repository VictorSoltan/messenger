import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Eye from  '../assets/fa-solid_eye.svg'
import HiddenEye from  '../assets/hiddenEye.svg'
import RedEye from  '../assets/red_fa-solid_eye.svg'
import RedHiddenEye from  '../assets/red_hiddenEye.svg'


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
  let [member, setMember] = useState(false);
  
  
  function validate(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function registrationCheck(){
    let answer = true
    if(!nickname){
      setNicknameCheck(true)
      answer=true
    }else{
      setNicknameCheck(false)
      answer=false
    } 
    if(mobileNumber === '+'){
      setMobileNumberCheck(true)
      answer=true
    }else{
      setMobileNumberCheck(false)
      answer=false
    }  
    if(!validate(mail)){
      setMailCheck(true)
      answer=true
    }else{
      setMailCheck(false)
      answer=false
    }
    if(!password){
      setPassCheck(true)
      answer=true
    }else{
      setPassCheck(false)
      answer=false
    } 
    if(password !== passwordRepeat){
      setPassRepeatCheck(true)
      answer=true
    }else if(!passwordRepeat){
      setPassRepeatCheck(true)
      answer=true
    }else{
      setPassRepeatCheck(false)
      answer=false
    }
    return(answer)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <ScrollView style={{width: '100%'}}>
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
                    passwordCheck ?
                    <RedEye style={{width: '22px', height: '16px'}} /> 
                  : 
                    <Eye style={{width: '22px', height: '16px'}} /> 
                  :
                  passwordCheck ? 
                    <RedHiddenEye style={{width: '22px', height: '16px'}} />
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
                    passwordRepeatCheck ?
                      <RedEye style={{width: '22px', height: '16px'}} /> 
                    : 
                      <Eye style={{width: '22px', height: '16px'}} /> 
                    :
                    passwordRepeatCheck ? 
                      <RedHiddenEye style={{width: '22px', height: '16px'}} />
                    : 
                      <HiddenEye style={{width: '22px', height: '16px'}} />
                  }
                </TouchableOpacity>
              </View>          
              <View style={{alignSelf: 'flex-start', height: '16%', marginTop: '3%', paddingLeft: '1%'}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, fontFamily: 'Poppins_500Medium'}}>Are you a member?</Text>
                  <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, borderWidth: 1, borderColor: 'black', borderRadius: 4, width: 26, height: 26, marginLeft: 24}} onPress={() => setMember(!member)}>
                  {member ? 
                    <View style={styles.selected}/>  
                    : null
                  }
                  </TouchableOpacity>              
                </View>
                <Text style={{marginTop: '4%', fontSize: 14, fontFamily: 'Poppins_400Regular'}}>Ask our manager how to become a member</Text>
              </View>
            </View>
            <View style={{width: '100%', marginTop: '8%', flex: 0}}>
              <BlueButton func={registrationCheck} link="Welcome" title="Register" />
              <View>
                <Text style={{alignSelf: 'flex-start', marginTop: '2%', paddingHorizontal: '6%', fontSize: 12, lineHeight: 24}}>
                  By registering to this app I agree 
                  <Text style={{textDecorationLine: "underline", color: '#112b66'}}>The terms and conditions of usage </Text>
                  and
                  <Text style={{textDecorationLine: "underline", color: '#112b66'}}> Terms of limited disclosure</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
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
    marginTop: '19%',
    paddingHorizontal: '6%',
  },   
  inputContainer: {
    display: 'flex',
    flex: 1,
    height: '80%',
    alignItems: 'center',
    width: '100%',
    marginTop: '3%'
  },
  loginLogo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: '4%'
  },  
  label: {
    alignSelf: 'flex-start',
    fontSize: 11,
    marginTop: '-1%',
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
  selected: {
    backgroundColor: '#112B66',
    width: '90%',
    height: '90%',
    borderRadius: 4
  }    
})