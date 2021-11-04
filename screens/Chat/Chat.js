import React, {useState, useEffect, useRef} from 'react';
import AppLoading from 'expo-app-loading';
import { Animated, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowUp from '../../assets/arrow_up.svg'

export default function Chat({ route, navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });   
  
  let [message, changeMessage] = React.useState("");
  let [scrollArea, setScrollArea] = React.useState(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       () => {
          setKeyboardVisible(true); // or some other action
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); // or some other action
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);

  let [chatMessaged] = useState([
    { name: 'ShaMsiDDin', receiver: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ' },
    { name: '***ShaMsiDDin***', receiver: true, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
    { name: '***ShaMsiDDin***', receiver: true, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
    { name: 'ShaMsiDDin', receiver: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ' },
    { name: 'ShaMsiDDin', receiver: false, text: '111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis.' },
    { name: '***ShaMsiDDin***', receiver: true, text: '222That`s better...' }
  ])
  let [notification, setNotification] = useState(false)
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
    <TouchableWithoutFeedback onPress={!isKeyboardVisible ? () => Keyboard.dismiss : scrollArea.scrollToEnd({ animated: true })} accessible={false}>
      <View style={styles.chat}>
        {notification ? 
          <View style={styles.notification}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center'}}>
              <Text style={{color: '#112B66', fontSize: 16, fontFamily: 'Poppins_500Medium'}}>CALENDAR UPDATE</Text>
              <View style={styles.notificationDot} />
              <Text style={styles.minutesPast}>5 minutes ago</Text>
            </View>
            <Text style={{alignSelf: 'flex-start', fontFamily: 'Poppins_500Medium', fontSize: 18}}>New Message</Text>
          </View>             
        :null}
        <View style={[styles.chatHeader]}>
          <View style={[styles.header, !route.params ? {justifyContent: 'center'} : {justifyContent: 'space-between'}]}>
            {route.params ? 
              <TouchableOpacity style={styles.contact} onPress={() => navigation.goBack()}>
                <ArrowLeft style={styles.arrow}/>             
              </TouchableOpacity>
            : null}
            <TouchableOpacity style={[styles.button, !route.params ? {width: '94%'} : null]} onPress={!route.params ? () => navigation.navigate('Avaliable') : null }>
              <Text style={styles.buttonText}>
              {route.params ? 
              'Calendar'
              : 'AVIABILITY CALENDAR'}
              </Text>
            </TouchableOpacity>    
          </View>
        </View>
        <Animated.View style={[styles.container, {maxHeight: isKeyboardVisible ? '54%' : '67%'}]}>
        <ScrollView ref={ref => setScrollArea(ref)}
          onContentSizeChange={() => scrollArea.scrollToEnd({ animated: true })}>
          {chatMessaged.map((item, index) => (
              <View onStartShouldSetResponder={() => true} key={index} style={[{display: 'flex', justifyContent: 'space-between', backgroundColor: '#F5F5F5'}, item.receiver ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'}]}>
                <View  key={index} style={[{ width: '70%', marginTop: '1%'}, item.receiver ? {marginRight: '4%'} : {marginLeft: '4%'}]}>
                  <Text style={[{fontFamily: 'Poppins_500Medium'}, item.receiver ? {alignSelf: 'flex-end'} : {alignItems: 'flex-start'}]}>{item.name}</Text>
                  <View  style={[styles.message, item.receiver ? styles.receiver : styles.sender]}>
                    <Text style={[item.receiver ? {color: '#112B66'} : {color: 'white'}, {fontFamily: 'Poppins_400Regular'}]}>{item.text}</Text>
                  </View>
                </View>
                <View style={[styles.TriangleShapeCSS, item.receiver ? styles.TriangleShapeRightCSS : styles.TriangleShapeLeftCSS]} />
              </View>
          ))}
          </ScrollView>    
        </Animated.View>
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
    position: 'absolute', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    top: '5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '95%',
    paddingVertical: '1%',
    padding: '4%',
    zIndex: 9999
  },
  notificationDot: {
    margin: 4, 
    marginLeft: '1.4%', 
    marginBottom: '1%', 
    borderRadius: 160, 
    width: 5, 
    height: 5, 
    backgroundColor: '#C4C4C4'
  },
  minutesPast: {
    marginBottom: '0.5%', 
    color: '#979797', 
    justifyContent: 'center', 
    alignItems: 'center', 
    fontFamily: 'Poppins_600SemiBold'
  },
  chatHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '11%',
    padding: '3%',
    paddingBottom: '6%'
  },
  header: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '96%'
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
    marginTop: '2%',
    paddingBottom: StatusBar.currentHeight,
    width: '100%'
  },  
  message: {
    borderRadius: 10,
    padding: '5%',
    paddingVertical: '6%'
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
    marginTop: -1,
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
    bottom: '4%',
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