import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Left from '../assets/left.svg'
import Right from '../assets/right.svg'

import BlueButton from "../components/BlueButton";

export default function DateEvents({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  }); 
  
    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    const months = [ 'January', 'February', 
    'March', 'April', 'May', 
    'June', 'July', 'August', 
    'September', 'October', 
    'November', 'December']
    let weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    
    const loadScene = () => {
      navigation.navigate('DateEvents')
    }

  const today = new Date();

  let [lastMonth, setLastMonth]    = useState(null) 
  let [currentMonth, setCurrentMonth] = useState(today.getMonth())
  let [currentYear, setCurrentYear] = useState(today.getFullYear())
  let [nextMonth, setNextMonth] = useState(null)

  let [monthSeted, setMonthSeted] = useState(true)

  if(monthSeted){
    if(today.getMonth()!==0){
      setLastMonth(today.getMonth()-1)
    }else{
      setLastMonth(12)
    }
    if(today.getMonth()!==11){
      setNextMonth(today.getMonth()+1)
    }else{
      setNextMonth(today.getMonth()-11)
    }
    setMonthSeted(false)
  }

    function goBack() {
      if(lastMonth===0){
        setLastMonth(11)
      }else{
        setLastMonth(lastMonth-1)
      }
      if(currentMonth===0){
        setCurrentMonth(11)
        setCurrentYear(currentYear-1)
      }else{
        setCurrentMonth(currentMonth-1)
      }
      if(nextMonth===0){
        setNextMonth(11)
      }else{
        setNextMonth(nextMonth-1)
      }
    }
    function goForward() {
      if(lastMonth===11){
        setLastMonth(0)
      }else{
        setLastMonth(lastMonth+1)
      }
      if(currentMonth===11){
        setCurrentMonth(0)
        setCurrentYear(currentYear+1)
      }else{
        setCurrentMonth(currentMonth+1)
      }
      if(nextMonth===11){
        setNextMonth(0)
      }else{
        setNextMonth(nextMonth+1)
      }
    }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#FFFFE8', padding: '5%'}}>
          <Text style={{marginLeft: '12%', fontFamily: 'Poppins_500Medium', fontSize: 23}}>ShaMsiDDin</Text>
          <Text style={{marginLeft: '4%', fontFamily: 'Poppins_500Medium', fontSize: 17, color: '#8A8A8A'}}>Kiev</Text>
        </View>    
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", marginTop: '3%', paddingHorizontal: '20%'}}>
          <TouchableOpacity onPress={goBack}>
            <Left style={{width: 20, height: 30}}/>
          </TouchableOpacity>
              <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{months[currentMonth]} {currentYear}</Text>
          <TouchableOpacity onPress={goForward}>
            <Right style={{width: 20, height: 30}}/>
          </TouchableOpacity>
        </View>                       
          
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '3%', paddingHorizontal: '7%'}}>
          {weekdaysShort.map((item, index) => {
            return(
              <View key={index} style={{width: '14.28%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 12}}>{item}</Text>
              </View>
            )
          })}
        </View>
        <View style={{display: 'flex', flexWrap: 'wrap', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '4%', paddingHorizontal:'7%'}}>
          {[...Array(daysInMonth(lastMonth+1, today.getFullYear())).keys()].slice(-14).map((item, index) => {
            return(
              <TouchableOpacity onPress={loadScene} key={index} style={[styles.cell, {borderColor: '#919db6', width: '14.28%', alignItems: 'center', justifyContent: 'center'}]}>
                <Text style={{fontSize: 16, fontFamily: 'Poppins_700Bold', color: '#b8b8b8'}} key={index}>{item+1}</Text>
              </TouchableOpacity>
            )
          })}
          {[...Array(daysInMonth(currentMonth+1, today.getFullYear())).keys()].map((item, index) => {
            return(
              <TouchableOpacity onPress={loadScene} key={index} style={[styles.cell, {backgroundColor: 'white', borderColor: '#112b66', width: '14.28%', alignItems: 'center', justifyContent: 'center'}]}>
                <Text style={{fontSize: 16, fontFamily: 'Poppins_700Bold', color: '#000000'}} key={index}>{item+1}</Text>
              </TouchableOpacity>
            )
          })}
          {[...Array(daysInMonth(nextMonth+1, today.getFullYear())).keys()].slice(0, 14+( 7- daysInMonth(currentMonth+1, today.getFullYear()) %7)).map((item, index) => {
            return(
              <TouchableOpacity onPress={loadScene} key={index} style={[styles.cell, {borderColor: '#112b66', width: '14.28%', alignItems: 'center', justifyContent: 'center'}]}>
                <Text style={{fontSize: 16, fontFamily: 'Poppins_700Bold', color: '#b8b8b8'}} key={index}>{item+1}</Text>
              </TouchableOpacity>
            )
          })}          
        </View>
        <View style={{marginTop: '4%', width: '84%'}}>
          <BlueButton title='CHAT WITH MANAGER' link="Chat" />        
        </View>
      </View>
    )
  }
}    

const styles = StyleSheet.create({
  container: { 
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingTop: '10%'
  },
  cell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '3.2%',
    borderWidth: 1,
    borderRadius: 6
  },     
})