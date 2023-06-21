import { useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Text as PText, Snackbar, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { useNavigation } from '@react-navigation/native';



export default function App() {

const navigation = useNavigation()

let {count} = useSelector((state) => state.app)

const dispatch = useDispatch()

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ecf0f1',

    }}>

      <Button mode='outlined'
        style={{ width: 150 }}
        onPress={() => {
          dispatch(updateCounter(count+1))
        }}
      >Add Number</Button>
      <Text style={{ fontSize: 18 }}> Count: {count}</Text>

      <Button mode='outlined'
        style={{ width: 150 }}
        onPress={() => {
          dispatch(updateCounter(count-1))
        }}
      >Minus Number</Button>

<Button mode='outlined'
        style={{ width: 150 }}
        onPress={() => {
          navigation.navigate('Details')
        }}
      >Next Screen</Button>



    </View>
  );
}


