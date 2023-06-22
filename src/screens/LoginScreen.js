import { useReducer, useState } from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import { Button, Text, Snackbar, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { useNavigation } from '@react-navigation/native';
import { colors, mesures } from '../utils/Theme';



export default function LoginScreen() {

  const navigation = useNavigation()

  const { width, height } = useWindowDimensions()
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ecf0f1',

    }}>
      <View style={{ width, height, position: 'absolute' }}>
        <Image
          style={{ width, height }}
          source={require('../../assets/uni_background.jpg')} />
        <View
          style={{ width, height, backgroundColor: '#333', position: 'absolute', opacity: .7 }}
        />
      </View>
      <View style={{
        paddingHorizontal: 20, paddingTop: 40,
        height: height / 2, backgroundColor: '#fff', borderTopRightRadius: 10, borderTopLeftRadius: 10,
        position: 'absolute', bottom: 0, left: 0, right: 0
      }}>
        <Text style={{ fontSize: 20 }}>Welcome to</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.primary }}>Smart Connect.</Text>
        <Text style={{ fontSize: 14, color: '#7f8c8d' }}>You getway to connect will smart people of IoBM</Text>

        <View style={{ marginTop: 50 }}>

          <TextInput mode='outlined'
            placeholder='Student Id'
            label={'Student Id'}
            outlineColor={colors.dark}
          ></TextInput>

          <TextInput
            style={{ marginTop: 10 }}
            secureTextEntry
            label={'Password'}
            outlineColor={colors.dark}
            activeOutlineColor={colors.primary}
            placeholder='Password' mode='outlined'></TextInput>


          <Button mode='contained'
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
            buttonColor={colors.primary}
          >Login</Button>

          <Button mode='text'

          onPress={()=>{
            navigation.navigate('Signup')
          }}
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
           textColor={colors.primary}
          >Dont have an account?</Button>
        </View>
      </View>

    </View>
  );
}


