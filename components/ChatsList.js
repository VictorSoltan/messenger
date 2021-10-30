import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';
import Search from '../assets/search.svg'
import Contact from '../assets/contact.svg'
import Green from '../assets/green.svg'

export default function ChatsList({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });   

  let [search, searchChat] = React.useState("");

  const [chatDivs] = useState([
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '11:38', notAnswered: '2', sound: true, groupChat: false },
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '10:38', notAnswered: '', sound: true, groupChat: false },
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '10:20', notAnswered: '', sound: true, groupChat: false },
    { name: '***ShaMsiDDin***', messagePreview: 'That`s better...', time: '9:59', notAnswered: '', sound: true, groupChat: false },
    { name: 'Mailing group', messagePreview: 'That`s better...', time: '9:58', notAnswered: '2', sound: false, groupChat: true },
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
          {/* <Image style={{position: 'absolute', width: 13, height: 13, marginLeft: '4%'}} source={Search}/>  */}
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
          {/* <Image style={{width: 23, height: 23}} source={Contact}/> */}
        </View>
      </View>
      <FlatList style={{width: '100%'}} data={chatDivs} renderItem={({item, index}) => (
        <TouchableOpacity key={index} style={[styles.chat, (index+1)%3===0 ? {backgroundColor: '#E9FFE8'} : index%3===0 ? {backgroundColor: '#E8F4FF'} : {backgroundColor: '#FFFFE8'}]} onPress={() => navigation.navigate('Chat', item)}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '98%'}}>
            <View>
              <Text style={{fontWeight: '500', fontSize: 16, color: '#222222', fontFamily: 'Poppins_500Medium'}}>{item.name}</Text>
              <Text style={{color: '#8D8E90', marginTop: '3%'}}>
                {!item.groupChat ? item.messagePreview
                : null}
              <Text style={{color: '#70AAEA', fontSize: 14}}>typing...</Text></Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                {/* <Image style={{width: 14, height: 10, marginRight: '12%'}} source={Green}/>  */}
                <Green style={{width: 14, height: 10, marginRight: '2%'}}/> 
                <Text style={{fontSize: 13, color: '#95999A'}}>{item.time}</Text>
              </View>
              {item.notAnswered !== '' ? 
                <Text style={styles.notAnswered}>2</Text>
              : null }
            </View>    
          </View>
          {item.groupChat ? 
            <Text style={styles.chatMemb}>Show Chat Members</Text>
          : null}
            <View style={styles.chatLine}/>
        </TouchableOpacity>
      )} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>             
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
    paddingBottom: '6%'
  },
  chatLine: {
    position: 'absolute',
    bottom: 1,
    height: 1,
    width: '80%',
    backgroundColor: '#D9D9D9'
  },
  chatMemb: {
    position: 'absolute',
    bottom: '12%',
    fontWeight: '500',
    fontSize: 16,
    color: '#8A8A8A'
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
  },
  button: {
    backgroundColor: '#112B66',
    marginBottom: '6%',
    padding: '3.2%',
    width: '84%',
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500',
    fontSize: 20,
    color: 'white'
  }
})