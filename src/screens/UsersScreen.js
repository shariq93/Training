import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button , Text as PText, Snackbar, TextInput } from 'react-native-paper';



export default function App() {




  const [username, setUserName] = useState('')
  const [passwrod, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ecf0f1',

    }}>
      <Text style={{ fontSize: 18 }}> This is a texting sentense </Text>
      <PText style={{ fontSize: 18 }}> This is a texting sentense </PText>

      <Button mode='outlined'
        style={{ width: 150 }}
        onPress={() => {
          alert('hello')
        }}
      >Paper Press Me</Button>


      <TextInput
        label="Email"
        value={username}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        label="Password"
        value={passwrod}
        mode='outlined'
        onChangeText={text => setPassword(text)}
      />

      <Button onPress={()=>{
          setVisible(!visible)
      }}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
      
        visible={visible}
        onDismiss={()=>{
        
          setVisible(false)
        }}
        duration={2*1000}
       >
       Network request failed!
      </Snackbar>
    </View>
  );
}


