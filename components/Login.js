import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { useFonts, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins';
import Eye from  '../assets/fa-solid_eye.svg'
import HiddenEye from  '../assets/hiddenEye.svg'
import BlueButton from "../components/BlueButton";

function Login(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });
  const LoginCheck = () => {
    if(mail==='admin'){
      props.adminEnter()
    }else{
      props.userEnter()
    }
  }

  let [mail, changeMail] = useState("");
  let [password, changePass] = useState("");
  let [passHide, setPassHide] = useState(true);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.login}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginLogo}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={changeMail}
            value={mail}
            placeholder={'E-Mail'}
          />
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              onChangeText={changePass}
              value={password}
              secureTextEntry={passHide}
              placeholder={'Password'}
            />
            <TouchableOpacity style={{position: 'absolute', right: '12%'}} onPress={() => setPassHide(!passHide)}>
              {passHide ? 
                <Eye style={{width: '22px', height: '16px'}} /> 
                :
                <HiddenEye style={{width: '22px', height: '16px'}} /> 
              }
            </TouchableOpacity>
          </View>
          <View style={{marginTop: '8.4%', width: '84%', alignItems: 'center'}}>
            <BlueButton func={LoginCheck} title="Enter" link="Welcome"/>
            <View style={{marginTop: '5%', width: '100%'}}>
              <BlueButton title="Register" link="Registration"/>
            </View>           
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}
function mapStateToProps(state){
  return {
    admin: state.admin
  }
}

function mapDispatchToProps(dispatch){
  return{
    adminEnter: () => dispatch({ type: 'ADMIN_ENTER'}),
    userEnter: () => dispatch({ type: 'USER_ENTER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex:1
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  loginLogo: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    marginBottom: '7%'
  },
  searchSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '84%',
    margin: 12,
    padding: '4%',
    paddingLeft: '5%',
    borderColor: '#E8E8E8',
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#8A8A8A',
    fontFamily: 'Poppins_400Regular'
  }
})