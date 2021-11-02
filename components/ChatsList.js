import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';
import ChatDiv from './ChatDiv'
import Search from '../assets/search.svg'
import Contact from '../assets/contact.svg'
import BlueButton from "./BlueButton";

export default function ChatsList() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });   

  let [search, searchChat] = React.useState("");

  let [chatDivs, setChatDivs] = useState([
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '11:38', notAnswered: '2', sound: true, groupChat: false },
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '10:38', notAnswered: '', sound: true, groupChat: false },
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '10:20', notAnswered: '', sound: true, groupChat: false },
    { name: '***ShaMsiDDin***', messagePreview: 'That`s better...', time: '9:59', notAnswered: '', sound: true, groupChat: false},
    { name: 'Mailing group', messagePreview: 'That`s better...', time: '9:58', notAnswered: '2', sound: false, groupChat: true, showMembs: false, groupChatMembs: ['ShaMsiDDin', 'ShaMsiDDin', 'ShaMsiDDin', 'ShaMsiDDin', 'ShaMsiDDin', 'ShaMsiDDin']  },
    { name: '***ShaMsiDDin***', messagePreview: 'That`s better...', time: '9:09', notAnswered: '', sound: true, groupChat: false }
  ])

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss} accessible={false}>

    <View style={styles.chats}>
      <View style={[styles.search, {marginTop: '6%'}]}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Search style={{position: 'absolute', width: 13, height: 13, marginRight: '4%'}}/>          
          <TextInput
            style={styles.input}
            onChangeText={searchChat}
            value={search}
            placeholder="Search"
          />  
        </View>
        <View style={styles.contact}>
          <Contact style={{width: 23, height: 23}}/>
        </View>
      </View>
      <ScrollView style={{position: 'absolute', top: '12%', height: '72%'}}> 
        <ChatDiv setChatDivs={setChatDivs} chatDivs={chatDivs}/>
      </ScrollView> 
      <View style={{position: 'absolute', width: '90%', bottom: '3%'}}>
        <BlueButton title="Home" link="Welcome"/>            
      </View>
    </View>    
    </TouchableWithoutFeedback>
  )}
}

const styles = StyleSheet.create({
  chats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  chat: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E8F4FF',
    width: '100%',
    padding: '3%',
  },
  chatLine: {
    position: 'absolute',
    bottom: 1,
    height: 1,
    width: '80%',
    backgroundColor: '#D9D9D9'
  },
  chatMemb: {
    marginBottom: '-6%',
  },
  chatMembs: {
    alignSelf: 'flex-start',
    marginTop: '2%',
    marginBottom: 0,
    paddingTop: '2%',
    width: '100%',
    fontSize: 20
  },
  notAnswered: {
    display: 'flex',
    backgroundColor: '#112B66',
    borderRadius: 190,
    marginTop: '24%',
    textAlign: 'center',
    width: 20,
    height: 20,
    color: 'white'
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },
  input: {
    width: '84%',
    margin: 12,
    padding: '2%',
    paddingLeft: '7%',
    borderColor: '#E8E8E8',
    borderWidth: 0,
    borderBottomWidth: 2,
    color: '#8A8A8A',
    fontFamily: 'Poppins_400Regular'
  },  
  contact: {
    backgroundColor: '#112B66',
    borderRadius: 190,
    marginLeft: '-2%',
    padding: '3%',
  }
})