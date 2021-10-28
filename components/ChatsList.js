import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
} from "@expo-google-fonts/dev";

export default function ChatsList({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });   

  let [search, searchChat] = React.useState("Search");

  const [chatDivs] = useState([
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '11:38', notAnswered: '2', sound: true, groupChat: false },
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '10:38', notAnswered: '', sound: true, groupChat: false },
    { name: 'ShaMsiDDin', messagePreview: 'That`s better...', time: '10:20', notAnswered: '', sound: true, groupChat: false },
    { name: '***ShaMsiDDin***', messagePreview: 'That`s better...', time: '9:59', notAnswered: '', sound: true, groupChat: false },
    { name: 'Mailing group', messagePreview: 'That`s better...', time: '9:58', notAnswered: '2', sound: false, groupChat: true },
    { name: '***ShaMsiDDin***', messagePreview: 'That`s better...', time: '9:09', notAnswered: '', sound: true, groupChat: false }
  ])

  return(
    <View style={styles.chats}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={searchChat}
          value={search}
        />     
        <View style={styles.contact}>
          <Image style={{width: 23, height: 23}} source={require("../assets/contact.svg")} />
        </View>
      </View>
      <FlatList style={{width: '100%'}} data={chatDivs} renderItem={({item, index}) => (
        <TouchableOpacity key={index} style={[styles.chat, (index+1)%3===0 ? {backgroundColor: '#E9FFE8'} : index%3===0 ? {backgroundColor: '#E8F4FF'} : {backgroundColor: '#FFFFE8'}]} onPress={() => navigation.navigate('Chat', item)}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '98%'}}>
            <View>
              <Text style={{fontWeight: 500, fontSize: 16, color: '#222222'}}>{item.name}</Text>
              <Text style={{color: '#8D8E90', marginTop: '3%'}}>
                {!item.groupChat ? item.messagePreview
                : null}
              <Text style={{color: '#70AAEA', fontSize: 14}}>typing...</Text></Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 13, color: '#95999A'}}><Image style={{width: 14, height: 10}} source={require("../assets/green.svg")}/> {item.time}</Text>
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>             
    </View>    
  )
}

const styles = StyleSheet.create({
  chats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  chat: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E8F4FF',
    width: '100%',
    padding: '3%',
    paddingBottom: '6%'
  },
  chatLine: {
    position: 'absolute',
    margin: '0 auto',
    bottom: 1,
    height: 1,
    width: '80%',
    backgroundColor: '#D9D9D9'
  },
  chatMemb: {
    position: 'absolute',
    top: '71%',
    fontWeight: 500,
    fontSize: 16,
    color: '#8A8A8A'
  },
  notAnswered: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#112B66',
    borderRadius: '190px',
    marginTop: '22%',
    padding: '2%',
    paddingTop: '6%',
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
    marginTop: '12%',
    padding: '2%',
    paddingLeft: '5%',
    borderColor: '#E8E8E8',
    borderWidth: 0,
    borderBottomWidth: 2,
    color: '#8A8A8A',
    fontFamily: 'Poppins_400Regular'
  },  
  contact: {
    backgroundColor: '#112B66',
    borderRadius: '190px',
    marginLeft: '-2%',
    padding: '3%',
  },
  button: {
    backgroundColor: '#112B66',
    marginTop: '5%',
    padding: '3.2%',
    width: '84%',
    borderRadius: '100px',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500',
    fontSize: '20px',
    color: 'white'
  }
})