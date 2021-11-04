import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './routes/homeStack'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  user: 'user'
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADMIN':
      return {user: state.user = 'admin'}
    case 'MANAGER':
      return {user: state.user = 'manager'}      
    case 'USER':
      return {user: state.user = 'user'}   
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
