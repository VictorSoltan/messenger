import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Left from '../../assets/left.svg'
import Right from '../../assets/right.svg'

import BlueButton from "../../components/BlueButton";

export default function DateEvents({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold  }); 

  let windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });  
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

  const loadScene = () => {
    navigation.navigate('Chat')
  }

  if(monthSeted){
    today.getMonth()!==0 ? setLastMonth(today.getMonth()-1) : setLastMonth(12)
    today.getMonth()!==11 ? setNextMonth(today.getMonth()+1) : setNextMonth(today.getMonth()-11)
    setMonthSeted(false)
  }

  let daysInCurrentMonth = daysInMonth(currentMonth+1, currentYear)

  if(daySeted){
    today.getDate()!==0 ? setYesterday(today.getDate()-1) : setYesterday(daysInCurrentMonth)
    today.getDate() !== daysInCurrentMonth ? setTomorrow(today.getDate()+1) : setTomorrow(1)
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
      lastMonth===11 ? setLastMonth(0) : setLastMonth(lastMonth+1)
      if(currentMonth===11){
        setCurrentMonth(0)
        setCurrentYear(currentYear+1)
      }else{
        setCurrentMonth(currentMonth+1)
      }
      nextMonth===11 ? setNextMonth(0) : setNextMonth(nextMonth+1)
    }
    todaysDay === daysInMonth(currentMonth+1, currentYear) ? setYesterday(daysInMonth(currentMonth+1, currentYear)) : todaysDay === 1 ? setYesterday(1) : setYesterday(yesterday+1)
    tomorrow !== daysInCurrentMonth ? setTomorrow(tomorrow+1) : setTomorrow(1)
  }

  let dayEvents = [
    {time:'11: 00', avaliable: 0, title: 'Book Now'},
    {time:'12: 00', avaliable: 0, title: 'Book Now'},
    {time:'13: 00', avaliable: 1, title: 'ASK MANAGER ABOUT AVAILABLITY'},
    {time:'14: 00', avaliable: 1, title: 'ASK MANAGER ABOUT AVAILABLITY'},
    {time:'15: 00', avaliable: 3, title: 'Not Available'},
    {time:'16: 00', avaliable: 3, title: 'Not Available'},
    {time:'17: 00', avaliable: 3, title: 'Not Available'},
    {time:'18: 00', avaliable: 3, title: 'Not Available'},
    {time:'19: 00', avaliable: 3, title: 'Not Available'}
  ]

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View style={styles.container}>
        <View style={[styles.header, {padding: windowHeight*0.028}]}>
          <Text style={styles.title}>ShaMsiDDin</Text>
          <Text style={styles.subTitle}>Kiev</Text>
        </View>  
        <View style={[styles.month_year, {marginTop:  windowHeight*0.025}]}>
          <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{months[currentMonth]} {currentYear}</Text>
        </View>     
        <View style={[styles.calendar, {marginTop: windowHeight*0.016, marginBottom: windowHeight*0.002}]}>
          <TouchableOpacity style={{padding: '6%'}} onPress={goBack}>
            <Left style={{width: 40, height: 60}}/>
          </TouchableOpacity>
          {[yesterday, todaysDay, tomorrow].map((item, index) => {
            return(
              <View key={index} style={[styles.dateStyle, index === 1 ? {backgroundColor: '#ffffff', borderColor: '#112b66', padding: '4%'} : {backgroundColor: '#fafafa', borderColor: '#8390ae', marginLeft: '0%'}]}>
                <Text style={[index === 1 ? {paddingVertical: windowHeight*0.01, width: 32, textAlign: 'center', fontSize: 24} : {paddingVertical: windowHeight*0.007, width: 22, textAlign: 'center', fontSize: 16}]}>{item}</Text>
              </View>
            )
          })}
          <TouchableOpacity style={{padding: '6%'}} onPress={goForward}>
            <Right style={{width: 40, height: 60}}/>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', marginTop: '2%', maxHeight: windowHeight*0.57}}>            
          <ScrollView style={{width: '100%'}}>
            <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
              {dayEvents.map((item, index) => {
                return(        
                  <View key={index} style={styles.dayEvents}>
                    <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 24}}>{item.time}</Text>
                    <TouchableOpacity onPress={loadScene} style={[styles.Event, item.avaliable === 0 ? {backgroundColor: '#03CC00'} : item.avaliable === 1 ? {backgroundColor: '#858585'} : {backgroundColor: '#E64646'}]}>
                      <Text style={[item.avaliable === 0 ? {color: 'white', fontSize: 16} : item.avaliable === 1 ? {color: 'white', fontSize: 11} : {color: 'black', fontSize: 16}, {fontFamily: 'Poppins_700Bold'}]}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )})
              }          
            </View>
         </ScrollView>
        </View>        
        <View style={styles.bottomButton}>
          <BlueButton title='CHAT WITH MANAGER' link="Chat"/>        
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
  header: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    width: '100%', 
    backgroundColor: '#FFFFE8'
  },
  title: {
    marginLeft: '12%', 
    fontFamily: 'Poppins_500Medium', 
    fontSize: 23
  },
  subTitle: {
    marginBottom: 3, 
    marginLeft: '4%', 
    fontFamily: 'Poppins_500Medium', 
    fontSize: 17, 
    color: '#8A8A8A'
  },
  month_year: {
    display: 'flex', 
    flexDirection:'row', 
    justifyContent: 'center', 
    width: "100%", 
    paddingHorizontal: '20%'
  },
  calendar: {
    display: 'flex', 
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: "100%", 
    paddingHorizontal: '22%'
  },
  dateStyle: {
    display: 'flex',
    fontFamily: 'Poppins_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    borderWidth: 1,
    borderRadius: 6
  },      
  dayEvents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
    marginTop: '3%'
  },
  Event: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2.3%',
    width: '70%'
  },
  bottomButton: {
    position: 'absolute', 
    width: '90%', 
    bottom: '3%'
  }
})