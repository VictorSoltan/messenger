import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Eye from  '../../assets/fa-solid_eye.svg'
import HiddenEye from  '../../assets/hiddenEye.svg'
import RedEye from  '../../assets/red_fa-solid_eye.svg'
import RedHiddenEye from  '../../assets/red_hiddenEye.svg'

import BlueButton from "../../components/BlueButton";

export default function DateEvents({ navigate }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  }); 

  let [passHide, setPassHide] = useState(true);
  let [passRepeatHide, setPassRepeatHide] = useState(true);
  let [employer, setEmployer] = useState(true)
  
  const validationSchema = Yup.object().shape({
    nickname: Yup.string()
      .required(),
    mobileNumber: Yup.string()
      .matches(/\w*[0-9]\w*/)
      .min(8)
      .required(),
    mail: Yup.string()
      .required()
      .email(),
    password: Yup.string()
        .min(8)
        .required(),
    passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),        
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <Formik
        initialValues={{ 
        nickname: '', mobileNumber: '', mail: '', password: '', passwordRepeat: '' }}
        validationSchema={validationSchema}
        onSubmit={() => setValid(!valid)}>
        {({ handleChange, handleBlur, handleSubmit, isValid, dirty, errors, values }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <ScrollView style={{width: '100%'}}>
              <View style={styles.inputContainer}>
                <Text style={styles.loginLogo}>Register as a client</Text>
                <TextInput
                  style={[styles.input, errors.nickname ? {borderColor: '#E64646'} : null]}
                  onChangeText={handleChange('nickname')}
                  onBlur={handleBlur('nickname')}
                  value={values.nickname}
                  placeholder={'Choose a nickname'}
                />
                <Text style={styles.label}>If you are an existing client please use the same nickname </Text>
                <TextInput
                  style={[styles.input, errors.mobileNumber ? {borderColor: '#E64646'} : null]}
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  value={values.mobileNumber}
                  placeholder={'Mobile Number'}
                />
                <Text style={styles.label}>Must be connected to whats app </Text>
                <TextInput
                  style={[styles.input, errors.mail ? {borderColor: '#E64646'} : null]}
                  onChangeText={handleChange('mail')}
                  onBlur={handleBlur('mail')}
                  value={values.mail}
                  placeholder={'E-Mail'}
                />
                <View style={styles.input_n_Icon}>
                  <TextInput
                    style={[styles.input, errors.password ? {borderColor: '#E64646'} : null]}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={passHide}
                    placeholder={'Choose a password'}
                  />
                  <TouchableOpacity style={styles.eye} onPress={() => setPassHide(!passHide)}>
                    {passHide ? 
                      errors.password ?
                        <RedEye style={{width: 22, height: 16}} /> 
                      : 
                      <Eye style={{width: 22, height: 16}} /> 
                      :
                        errors.password ? 
                        <RedHiddenEye style={{width: 22, height: 16}} />
                    : 
                      <HiddenEye style={{width: 22, height: 16}} />
                    }
                  </TouchableOpacity>
                </View>
                <View style={styles.input_n_Icon}>
                  <TextInput
                    style={[styles.input, errors.passwordRepeat ? {borderColor: '#E64646'} : null]}
                    onChangeText={handleChange('passwordRepeat')}
                    onBlur={handleBlur('passwordRepeat')}
                    value={values.passwordRepeat}
                    secureTextEntry={passRepeatHide}
                    placeholder={'Repeat the password'}
                  />
                  <TouchableOpacity style={styles.eye} onPress={() => setPassRepeatHide(!passRepeatHide)}>
                    {passRepeatHide ?
                      errors.passwordRepeat ?
                        <RedEye style={{width: 22, height: 16}} /> 
                      : 
                        <Eye style={{width: 22, height: 16}} /> 
                      :
                      errors.passwordRepeat ? 
                        <RedHiddenEye style={{width: 22, height: 16}} />
                      : 
                        <HiddenEye style={{width: 22, height: 16}} />
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
            <View style={{width: '100%', marginTop: '8%', flex: 0}}>
              <BlueButton isValid={isValid&&dirty} func={handleSubmit} link="Registration" title="Register" />
              <View>
                <Text style={{alignSelf: 'flex-start', marginTop: '4%', paddingHorizontal: '6%', fontSize: 12, lineHeight: 24}}>
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
      )}     
      </Formik> 
    )
  }
}    

const styles = StyleSheet.create({
  container: { 
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingTop: '19%',
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
  eye: {
    position: 'absolute', 
    right: '6%'
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