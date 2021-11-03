import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './routes/homeStack'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  admin: false
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADMIN_ENTER':
      return {admin: state.admin = true}
    case 'USER_ENTER':
      return {admin: state.admin = false}      
  }
  return state
}

const store = createStore(reducer)
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});
