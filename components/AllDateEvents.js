import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
// import CalendarStrip from 'react-native-calendar-strip';
import Left from '../assets/left.svg'
import Right from '../assets/right.svg'

import BlueButton from "./BlueButton";

export default function DateEvents({ navigate }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  }); 
  
  const months = [ 'January', 'February', 
    'March', 'April', 'May', 
    'June', 'July', 'August', 
    'September', 'October', 
    'November', 'December']  
  
  const today = new Date();

  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

  let [yesterday, setYesterday] = useState(null)
  let [todaysDay, setTodayDay]    = useState(today.getDate()) 
  let [tomorrow, setTomorrow] = useState(null)
  let [lastMonth, setLastMonth]    = useState(null) 
  let [currentMonth, setCurrentMonth] = useState(today.getMonth())
  let [nextMonth, setNextMonth] = useState(null)
  let [currentYear, setCurrentYear] = useState(today.getFullYear())

  let [daySeted, setDaySeted] = useState(true)
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

  let daysInCurrentMonth = daysInMonth(currentMonth+1, currentYear)

  if(daySeted){
    if(today.getDate()!==0){
      setYesterday(today.getDate()-1)
    }else{
      setYesterday(daysInCurrentMonth)
    }
    if(today.getDate() !== daysInCurrentMonth){
      setTomorrow(today.getDate()+1)
    }else{
      setTomorrow(1)
    }
    setDaySeted(false)
  }

  function goBack() {

    if(todaysDay !== 1){
      setTodayDay(todaysDay-1)
    }else{
      setTodayDay(daysInMonth(currentMonth, currentYear))
          lastMonth===0 ? setLastMonth(11) : setLastMonth(lastMonth-1)
    if(currentMonth===0){
      setCurrentMonth(11)
      setCurrentYear(currentYear-1)
    }else{
      setCurrentMonth(currentMonth-1)
    }
    nextMonth===0 ? setNextMonth(11) : setNextMonth(nextMonth-1)
    }
    yesterday !== 1 ? setYesterday(yesterday-1) : setYesterday(daysInMonth(currentMonth, currentYear))
    tomorrow !== 1 ? setTomorrow(tomorrow-1) : setTomorrow(daysInMonth(currentMonth+1, currentYear))  
  }

  function goForward() {
    if(todaysDay !== daysInCurrentMonth){
      setTodayDay(todaysDay+1)
    }else{
      setTodayDay(1)
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
    if(todaysDay === daysInMonth(currentMonth+1, currentYear)){
      setYesterday(daysInMonth(currentMonth+1, currentYear))
    }else if(todaysDay === 1){
      setYesterday(1)
    }else{
      setYesterday(yesterday+1)
    }
    tomorrow !== daysInCurrentMonth ? setTomorrow(tomorrow+1) : setTomorrow(1)
  }

  let dayEvents = [
    {time:'All Day', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'11: 00', avaliable: 0, double: false, title: 'AVAILABLE'},
    {time:'12: 00', avaliable: 2, double: false, title: 'Not Available'},
    {time:'13: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'14: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'15: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'16: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'17: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'},
    {time:'18: 00', avaliable: 0, secondAvlbl: 2, double: true, title: 'AVAILABLE', secondTitle: 'NOT'}
  ]

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={styles.container}>
        <View style={{width: '88%'}}>
          <BlueButton title='Home'/>        
        </View>
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', width: "100%", marginTop: '2%', paddingHorizontal: '20%'}}>
          <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{months[currentMonth]} {currentYear}</Text>
        </View>     
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", marginTop: '2%', marginBottom: '1%', paddingHorizontal: '28%'}}>
          <TouchableOpacity onPress={goBack}>
            <Left style={{width: 20, height: 30}}/>
          </TouchableOpacity>
          <View style={[styles.dateStyle, {backgroundColor: '#fafafa', borderColor: '#8390ae', marginLeft: '6%'}]}>
            <Text style={[{width: 20, textAlign: 'center', fontSize: 16}]}>{yesterday}</Text>
          </View>
          <View style={[styles.dateStyle, {backgroundColor: '#ffffff', borderColor: '#112b66', padding: '6%'}]}>
            <Text style={[{paddingVertical: '4%', width: 26, textAlign: 'center', fontSize: 24}]}>{todaysDay}</Text>
          </View>
          <View style={[styles.dateStyle, {backgroundColor: '#fafafa', borderColor: '#8390ae', marginRight: '6%'}]}>
            <Text style={[{width: 20, textAlign: 'center', fontSize: 16}]}>{tomorrow}</Text>
          </View>
          <TouchableOpacity onPress={goForward}>
            <Right style={{width: 20, height: 30}}/>
          </TouchableOpacity>
        </View>
        { dayEvents.map((item, index) => {
          return(        
            <View key={index} style={[styles.dayEvents, index===0 ? {marginBottom: '4%'} : null ]}>
              <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{item.time}</Text>
              {item.double? 
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '62%'}}>
                  <View style={[styles.Event, {width: '49.8%'}, item.avaliable === 0 ? {backgroundColor: '#03CC00'} : item.avaliable === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                    <Text style={[item.avaliable === 0 ? {color: 'white', fontSize: 16} : item.avaliable === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.title}</Text>
                  </View>
                  <View style={[styles.Event, {width: '49.8%'}, item.secondAvlbl === 0 ? {backgroundColor: '#03CC00'} : item.secondAvlbl === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                    <Text style={[item.secondAvlbl === 0 ? {color: 'white', fontSize: 16} : item.secondAvlbl === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.secondTitle}</Text>
                  </View>                                
                </View>
              :
                <View style={[styles.Event, {width: '62%'}, item.avaliable === 0 ? {backgroundColor: '#03CC00'} : item.avaliable === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                  <Text style={[item.avaliable === 0 ? {color: 'white', fontSize: 16} : item.avaliable === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.title}</Text>
                </View>
              }
            </View>
          )})
        }          
        <View style={{marginTop: '5%', width: '88%'}}>
          <BlueButton title='Save'/>        
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
  dateStyle: {
    display: 'flex',
    fontFamily: 'Poppins_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
    paddingVertical: '6%',
    borderWidth: 1,
    borderRadius: 6
  },      
  dayEvents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
    marginTop: '2%'
  },
  Event: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2%',
    width: '70%'
  }
})