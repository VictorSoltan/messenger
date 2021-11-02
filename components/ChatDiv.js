import React from 'react';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';
import Green from '../assets/green.svg'
import Sound from '../assets/sound.svg'
import Edit from '../assets/clarity_note-edit-line.svg'

export default function ChatsDiv(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });   
  const navigation = useNavigation();
  
  const updateFieldChanged = (index) => {
    let newArr = [...props.chatDivs]; 
    newArr[index].showMembs = !props.chatDivs[index].showMembs;
    props.setChatDivs(newArr);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <View>
        <FlatList data={props.chatDivs}  renderItem={({item, index}) => (
          <TouchableOpacity key={index} style={[styles.chat, (index+1)%3===0 ? {backgroundColor: '#E9FFE8'} : index%3===0 ? {backgroundColor: '#E8F4FF'} : {backgroundColor: '#FFFFE8'}, item.groupChat ? {backgroundColor: '#FFFFFF'} : null, item.showMembs? {paddingBottom: '6%'} : null ]} onPress={() => navigation.navigate('Chat', item)}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '98%'}}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontWeight: '500', fontSize: 16, color: '#222222', fontFamily: 'Poppins_500Medium'}}>{item.name}</Text>
                  {!item.sound ?
                    <Sound style={{width: 30, height: 30, marginLeft: '2%'}}/>               
                  : null}
                </View>
                <Text style={{color: '#8D8E90', marginTop: '3%'}}>
                  {!item.groupChat ? item.messagePreview
                  : null}
                <Text style={{color: '#70AAEA', fontSize: 14}}>typing...</Text></Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Green style={{width: 14, height: 10, marginRight: '2%'}}/> 
                  <Text style={{fontSize: 13, color: '#95999A'}}>{item.time}</Text>
                </View>
                {item.notAnswered !== '' ? 
                  <Text style={[styles.notAnswered, !item.sound ? {backgroundColor: '#C5C9CC'} : null]}>2</Text>
                : null }
              </View>    
            </View>
            {item.groupChat ? 
              <>
                <TouchableOpacity style={styles.chatMemb} onPress={() => updateFieldChanged(index)}>
                  <Text style={{fontSize: 16, fontFamily: 'Poppins_500Medium', color: '#8A8A8A'}}>
                    {item.showMembs ? 'Show Chat Members'
                    : 'Hide Chat Members'}
                  </Text>
                </TouchableOpacity>
              </>
            : null}
            {item.groupChatMembs&&!item.showMembs ?
              <>
                <View style={{marginTop: '3%', width: '100%'}}>
                <View style={{position: 'absolute', top: 10, alignSelf: 'center', height: 1, width: '80%', backgroundColor: '#D9D9D9'}}/>
                  {item.groupChatMembs.map((item, index) => {
                    return(
                      <Text style={[styles.chatMembs, (index+1)%3===0 ? {color: '#03CC00'} : index%3===0 ? {color: '#0069CC'} : {color: '#C9CC00'}, index>2 ? {color: '#222222'} : null]} key={index}>{item}</Text>
                    )
                  })}
                  <Edit style={{position: 'absolute', bottom: 0, right: 0, width: 14, height: 10, marginRight: '2%'}}/> 
                </View>
              </>
            : null}
            <View style={styles.chatLine}/>
          </TouchableOpacity>
        )} />
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
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
  }
})