import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, StatusBar, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600Medium} from '@expo-google-fonts/poppins';

import ArrowLeft from '../assets/arrow-left.svg'
import ArrowUp from '../assets/arrow_up.svg'

export default function Chat({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600Medium
  });   

  let [message, changeMessage] = React.useState("");

  let [chatMessaged] = useState([
    { receiver: false, name: 'ShaMsiDDin', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ' },
    { receiver: true, name: '***ShaMsiDDin***', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
    { receiver: true, name: '***ShaMsiDDin***', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
    { receiver: false, name: 'ShaMsiDDin', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ' },
    { receiver: false, name: 'ShaMsiDDin', text: '111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis.' },
    { receiver: true, name: '***ShaMsiDDin***', text: '222That`s better...' }
  ])
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss} accessible={false}>
      <View style={styles.chat}>
        <View style={[styles.notification, {position: 'absolute', justifyContent: 'flex-start', alignItems: 'center'}]}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center'}}>
            <Text style={{color: '#112B66', fontSize: 16, fontFamily: 'Poppins_500Medium'}}>CALENDAR UPDATE</Text>
            <View style={{margin: 4, marginLeft: '1.4%', marginBottom: '1%', borderRadius: 160, width: 5, height: 5, backgroundColor: '#C4C4C4'}} />
            <Text style={{marginBottom: '0.5%', color: '#979797', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins_600Medium'}}>5 minutes ago</Text>
          </View>
          <Text style={{alignSelf: 'flex-start', fontFamily: 'Poppins_500Medium', fontSize: 18}}>New Message</Text>
        </View>        
        <View style={[styles.chatHeader]}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '96%'}}>
            <View style={styles.contact}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft style={styles.arrow}/>             
              </TouchableOpacity>
            </View>     
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Calendar</Text>
            </TouchableOpacity>    
          </View>
        </View>
        <ScrollView style={styles.container}>    
          {chatMessaged.reverse().map((item, index) => {
            return(
            <View key={index} style={[{display: 'flex', justifyContent: 'space-between'}, item.receiver ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'}]}>
              <View key={index} style={[{ width: '70%', marginTop: '1%'}, item.receiver ? {marginRight: '4%'} : {marginLeft: '4%'}]}>
                <Text style={[{fontFamily: 'Poppins_500Medium'}, item.receiver ? {alignSelf: 'flex-end'} : {alignItems: 'flex-start'}]}>{item.name}</Text>
                <View  style={[styles.message, item.receiver ? styles.receiver : styles.sender]}>
                  <Text style={[item.receiver ? {color: '#112B66'} : {color: 'white'}, {fontFamily: 'Poppins_400Regular'}]}>{item.text}</Text>
                </View>
              </View>
              <View style={[styles.TriangleShapeCSS, item.receiver ? styles.TriangleShapeRightCSS : styles.TriangleShapeLeftCSS]} />
            </View>
            )})
          }
        </ScrollView>      
        <View style={styles.messageInput}>
          <TextInput
            style={styles.input}
            onChangeText={changeMessage}
            value={message}
            placeholder="Type here..."
          />
          <View style={styles.sendButton}>
            <ArrowUp style={{width: 12, height: 18}} />
          </View>      
        </View>      
      </View>
    </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  chat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  notification: {
    top: '5%',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '95%',
    paddingVertical: '1%',
    padding: '4%',
    zIndex: 9999
  },
  chatHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '11%',
    padding: '3%',
    paddingBottom: '6%'
  },
  contact: {
    backgroundColor: 'white',
    borderRadius: 190,
    padding: '5%',
  },
  arrow: {
    width: 14, 
    height: 14,
  },
  button: {
    backgroundColor: '#D0C921',
    padding: '3%',
    width: '80%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: 'white'
  },
  container: {
    position: 'absolute',
    top: '22%',
    display: 'flex',
    paddingBottom: StatusBar.currentHeight,
    width: '100%',
    height: '62%'
  },  
  message: {
    borderRadius: 10,
    padding: '5%',
    paddingTop: '6%',
    paddingBottom: '6%',
  },
  sender: {
    backgroundColor: '#112B66',
    borderBottomLeftRadius: 0
  },
  receiver: {
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 0
  },
  TriangleShapeCSS: {
    width: 0,
    height: 0,
    borderTopWidth: 16,
    borderStyle: 'solid',
    borderLeftColor: '#F5F5F5',
    borderRightColor: '#F5F5F5'
  },
  TriangleShapeLeftCSS: {
    borderRightWidth: 22,
    marginLeft: '4%',
    borderTopColor: '#112B66',
  }, 
  TriangleShapeRightCSS: {
    borderLeftWidth: 22,
    marginRight: '4%',
    alignSelf: 'flex-end',
    borderTopColor: 'white',
  },
  messageInput: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    width: '94%',
    margin: 12,
    padding: '4%',
    paddingLeft: '5%',
    borderColor: '#E8E8E8',
    borderRadius: 100,
    borderWidth: 1,
    color: '#8A8A8A',
    fontFamily: 'Poppins_500Medium'
  },  
  sendButton: {
    position: 'absolute', 
    right: '11%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#112B66',
    borderRadius: 190,
    width: 40, 
    height: 40
  }  
})