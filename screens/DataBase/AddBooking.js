import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';


import BlueButton from "../../components/BlueButton";

export default function DateEvents() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold  }); 

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <Formik
        initialValues={{ 
          date: '', time: '', dutan: '', name: '', mobileNumber: '' }}
        validationSchema={validationSchema}
        onSubmit={() => setValid(!valid)}>
        {({ handleChange, handleSubmit, isValid, dirty, values })  => (     
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Text style={styles.loginLogo}>Add booking</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('date')}
                  value={values.date}
                  placeholder={'Date'}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('time')}
                  value={values.time}
                  placeholder={'Time'}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('dutan')}
                  value={values.dutan}
                  placeholder={'Dutan'}
                />              
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  placeholder={'Name'}
                />    
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('mobileNumber')}
                  value={values.mobileNumber}
                  placeholder={'Mobile Number'}
                />                            
              </View>
              <View style={styles.bottomButton}>
                <BlueButton isValid={isValid&&dirty} func={handleSubmit} link="Welcome" title="Save" />
              </View>
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
    paddingTop: '18%',
    paddingHorizontal: '6%',
  },   
  inputContainer: {
    display: 'flex',
    flex: 1,
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
  bottomButton: {
    position: 'relative', 
    width: '100%', 
    bottom: '19%', 
    flex: 0
  }
})