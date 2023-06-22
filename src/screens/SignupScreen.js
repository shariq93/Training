import { useReducer, useState } from 'react';
import { View, Image, useWindowDimensions, TouchableOpacity, Pressable } from 'react-native';
import { Button, Text, Snackbar, TextInput, } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { useNavigation } from '@react-navigation/native';
import { colors, mesures } from '../utils/Theme';
import { Ionicons } from '@expo/vector-icons';


export default function Signup() {

  const navigation = useNavigation()

  const { width, height } = useWindowDimensions()
  const [gender,setGender] = useState('')
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
        height: height * .70, backgroundColor: '#fff', borderTopRightRadius: 10, borderTopLeftRadius: 10,
        position: 'absolute', bottom: 0, left: 0, right: 0
      }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.primary }}>Register.</Text>

        <View style={{ marginTop: 15 }}>

          <TextInput mode='outlined'
            placeholder='Full name'
            label={'Full name'}
            outlineColor={colors.dark}
          ></TextInput>
          <TextInput mode='outlined'
            placeholder='Student Id'
            label={'Student Id'}
            outlineColor={colors.dark}
          ></TextInput>

          <TextInput mode='outlined'
            placeholder='Email'
            label={'Email'}
            outlineColor={colors.dark}
          ></TextInput>
          <View style={{flexDirection:'row',alignItems: 'center',marginVertical:10}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>
              Gender
            </Text>
            <Pressable onPress={()=>{
              setGender('male')
            }} style={{ flexDirection: 'row', alignItems: 'center',marginLeft:20 }}>
              <Ionicons name={gender=='male'?"radio-button-on-outline":"radio-button-off-outline"} size={24} color="black" />
              <Text>
                Male
              </Text>
            </Pressable>
            <Pressable onPress={()=>{
              setGender('female')
            }} style={{ flexDirection: 'row', alignItems: 'center',marginLeft:10 }}>
              <Ionicons name={gender=='female'?"radio-button-on-outline":"radio-button-off-outline"} size={24} color="black" />
              <Text>
                Female
              </Text>
            </Pressable>
          </View>
          <TextInput

            secureTextEntry
            label={'Password'}
            outlineColor={colors.dark}
            activeOutlineColor={colors.primary}
            placeholder='Password' mode='outlined'></TextInput>

          <TextInput

            secureTextEntry
            label={'Confirm password'}
            outlineColor={colors.dark}
            activeOutlineColor={colors.primary}
            placeholder='Confirm password' mode='outlined'></TextInput>


          <Button mode='contained'
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
            buttonColor={colors.primary}
          >Create Account</Button>

          <Button mode='text'
          onPress={()=> navigation.goBack()}
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
            textColor={colors.primary}
          >Already have an account</Button>
        </View>
      </View>

    </View>
  );
}


