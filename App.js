import { StatusBar } from 'expo-status-bar';
import { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [counter, setCounter] = useState(0)

  // useEffect(//function,[dependency array])
  useEffect(() => {
    // alert('screen loaded');
 
  return ()=>{
    alert('closing app')
  }
  }, [counter])

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
      <Text style={{ fontSize: 30 }}>{counter}</Text>
      <Button
        title='Add counter'
        onPress={() => {
          setCounter(counter + 1)

        }
        }
      />
      <Button
        title='Minus Counter'
        onPress={() => {
          setCounter(counter - 1)
          console.log(counter);
        }
        }
      />
    </View>
  );
}


