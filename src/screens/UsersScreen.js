import { StatusBar } from 'expo-status-bar';
import { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import UserListItem from '../components/UserListItem';
import { TextInput } from 'react-native';
import MyTextFiled from '../components/MyTextFiled';
import UserField from '../components/UserField';
import ProductItem from '../components/ProductItem';



export default function App() {




  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
   try {
    setLoading(true)
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
    setLoading(false)
   } catch (error) {
    alert(error)
   }
  
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ecf0f1',

    }}>
      {loading && <ActivityIndicator color={'#333'} />}
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => {
          console.log(item);
          return <ProductItem data={item} />
        }}

      />
    </View>
  );
}


