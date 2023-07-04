import { useReducer, useState, useEffect } from 'react';
import { View, Image, useWindowDimensions, TouchableOpacity, Pressable } from 'react-native';
import { Button, Text, Snackbar, TextInput, } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { useNavigation } from '@react-navigation/native';
import { colors, mesures } from '../utils/Theme';
import { Ionicons } from '@expo/vector-icons';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { registerUser } from '../apis/ApiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Signup() {

  const navigation = useNavigation()

  const { width, height } = useWindowDimensions()
// Creating scheme for user signup
const scheme = yup.object().shape({
  name: yup.string().min(6,"Name is too small").max(10).required("Name is required"),
  stdId: yup.string().min(6,"Student id is too small").max(10).required("Student Id is required"),
  email: yup.string().email().min(10).required("Email is required"),
  password: yup.string().min(8).max(12).required(),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
 })
const { handleChange, handleSubmit, setFieldValue, handleBlur, values, errors, touched, setFieldTouched } = useFormik({
  initialValues: {
    name: 'noorulhuda',
    stdId: 'noor1234',
    email: 'noor.huda@yahoo.com',
    password: '',
    passwordConfirmation: '',
  },
  validationSchema: scheme,
  onSubmit: (values) => {
    registerUser(values.name, values.stdId, values.email, values.password,(isSuccess, data) => {
      console.log(data);
      if (isSuccess) {
       

      } else {
        alert(data.message)
      }
    })
  }
})
//console.log({ errors, values, touched });
//useEffect
useEffect(() => {
  registerfunc()

})
const registerfunc =async  () => {
  const isRegister = await AsyncStorage.getItem('@isRegister')
  if(isRegister=='1'){
    const user = await AsyncStorage.getItem('@user')
    alert(user)
  }



}
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
            value={values.name}
            error={errors.name && touched.name}
            onBlur={() => setFieldTouched('name', true)}
            onChangeText={(text) => setFieldValue('name', text)}
                        outlineColor={colors.dark}
          ></TextInput>
          {(errors.name && touched.name) && <Text style={{ color: 'red', fontSize: 12 }}>{errors.name}</Text>}
          <TextInput mode='outlined'
            placeholder='Student Id'
            label={'Student Id'}
            value={values.stdId}
            error={errors.stdId && touched.stdId}
            onBlur={() => setFieldTouched('stdId', true)}
            onChangeText={(text) => setFieldValue('stdId', text)}
            outlineColor={colors.dark}
          ></TextInput>
          {(errors.stdId && touched.stdId) && <Text style={{ color: 'red', fontSize: 12 }}>{errors.stdId}</Text>}
          <TextInput mode='outlined'
            placeholder='Email'
            label={'Email'}
            value={values.email}
            error={errors.email && touched.email}
            onBlur={() => setFieldTouched('email', true)}
            onChangeText={(text1) => setFieldValue('email', text1)}
            outlineColor={colors.dark}
          ></TextInput>
          {(errors.email && touched.email) && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>}
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
            error={errors.password && touched.password}
            onBlur={() => setFieldTouched('password', true)}
            outlineColor={colors.dark}
            onChangeText={(text) => setFieldValue('password', text)}
            activeOutlineColor={colors.primary}
            placeholder='Password' mode='outlined'
            ></TextInput>
          {(errors.password && touched.password) && <Text style={{ color: 'red', fontSize: 12 }}>{errors.password}</Text>}  
          <TextInput
           secureTextEntry
            label={'Confirm password'}
            error={errors.passwordConfirmation && touched.passwordConfirmation}
            onBlur={() => setFieldTouched('passwordConfirmation', true)}
            outlineColor={colors.dark}
            onChangeText={(text) => setFieldValue('passwordConfirmation', text)}
            activeOutlineColor={colors.primary}
            placeholder='Confirm password' mode='outlined'></TextInput>
          {(errors.passwordConfirmation && touched.passwordConfirmation) && <Text style={{ color: 'red', fontSize: 12 }}>
            {errors.passwordConfirmation}</Text>}  

          <Button mode='contained'
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
            buttonColor={colors.primary}
            onPress={handleSubmit}
          >Create Account</Button>
{/* 
          <Button mode='text'
          onPress={()=> navigation.goBack()}
            style={{ borderRadius: mesures.borderRadius, marginTop: 20 }}
            textColor={colors.primary}
          >Already have an account</Button> */}
        </View>
      </View>

    </View>
  );
}


