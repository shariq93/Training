import { StatusBar } from 'expo-status-bar';
import { Component, useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserListItem from '../components/UserListItem';
import { TextInput } from 'react-native';
import MyTextFiled from '../components/MyTextFiled';



export default function App() {

  const userList = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Alice Smith', email: 'alicesmith@example.com' },
    { name: 'Robert Johnson', email: 'robertjohnson@example.com' },
    { name: 'Emily Brown', email: 'emilybrown@example.com' },
    { name: 'Michael Davis', email: 'michaeldavis@example.com' },
    { name: 'Sarah Wilson', email: 'sarahwilson@example.com' },
    { name: 'David Anderson', email: 'davidanderson@example.com' },
    { name: 'Jennifer Taylor', email: 'jennifertaylor@example.com' },
    { name: 'Christopher Thomas', email: 'christopherthomas@example.com' },
    { name: 'Jessica Martinez', email: 'jessicamartinez@example.com' }
  ]

  const [query, setQuery] = useState("")
  useEffect(() => {


    const filter = (item) => {

      if (item.name.includes(query)) { return true }
      else return false
    }
    const fList = userList.filter(filter)
    console.log(fList);
  }

    , [query])

  return (
    <View style={{
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop: 45,
    }}>
      <View style={{ paddingHorizontal: 20 }}>

        <MyTextFiled
          onChange={(text) => {
            setQuery(text)
          }}

        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={userList}

          renderItem={(item) => {
            return <UserListItem data={item.item} />

          }}
        />
      </View>
    </View>
  );
}


