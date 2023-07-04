import { useEffect, useReducer, useState } from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import { Button, Text, Snackbar, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { useNavigation } from '@react-navigation/native';
import { colors, mesures } from '../utils/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../apis/ApiClient';
import { getUser } from '../storage/Storage';


export default function LoginScreen() {

  const navigation = useNavigation()

  const { width, height } = useWindowDimensions()

  const scheme = yup.object().shape({
    stdId: yup.string().min(6, "Student id is too small").max(10).required("Student Id is required"),
    password: yup.string().min(8).max(12).required(),
  })



  const { handleChange, handleSubmit, setFieldValue, handleBlur, values, errors, touched, setFieldTouched } = useFormik({
    initialValues: {
      stdId: '',
      password: '',
    },
    validationSchema: scheme,
    onSubmit: (values) => {
      loginUser(values.stdId, values.password, (isSuccess, data) => {

        if (isSuccess) {
          AsyncStorage.setItem("@user", JSON.stringify(data.record))
          AsyncStorage.setItem("@token", JSON.stringify(data.token))
          AsyncStorage.setItem("@isLogin", '1')


        } else {
          alert(data.message)
        }
      })
    }
  })

  useEffect(() => {
    checkLogin()

  })

  const checkLogin =async  () => {
    const isLogin = await AsyncStorage.getItem('@isLogin')
    if(isLogin=='1'){
     navigation.navigate('Home')
    }


  
  }
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
            error={errors.stdId && touched.stdId}
            onBlur={() => setFieldTouched('stdId', true)}
            onChangeText={(text) => setFieldValue('stdId', text)}
            outlineColor={colors.dark}
          ></TextInput>
          {(errors.stdId && touched.stdId) && <Text style={{ color: 'red', fontSize: 12 }}>{errors.stdId}</Text>}

          <TextInput
            style={{ marginTop: 10 }}
            secureTextEntry
            label={'Password'}
            error={errors.password && touched.password}
            onBlur={() => setFieldTouched('password', true)}
            outlineColor={colors.dark}
            onChangeText={(text) => setFieldValue('password', text)}
            activeOutlineColor={colors.primary}
            placeholder='Password' mode='outlined'></TextInput>
          {(errors.password && touched.password) && <Text style={{ color: 'red', fontSize: 12 }}>{errors.password}</Text>}

          <Button mode='contained'
            onPress={handleSubmit}
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
            buttonColor={colors.primary}
          >Login</Button>

          <Button mode='text'

            onPress={() => {
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


