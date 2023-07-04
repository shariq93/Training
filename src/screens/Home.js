

import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { onLogout } from '../storage/Storage';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { createTextPost, getAllPosts } from '../apis/ApiClient';
import { FlatList } from 'react-native';




const Home = () => {
    const [postText, setPostText] = useState('')
    const [allPosts, setAllPosts] = useState('')

    useEffect(() => {
        getPosts()
    }, [])

    getPosts = ()=>{
        getAllPosts((isSuccess, data) => {
            if (isSuccess) {
               
                setAllPosts(data.items)
            }
        })
    }
    return <View style={{ flex: 1, }}>
        <Header title={'Home Screen'} />
        <Text> Home Screen</Text>


        <TextInput
            multiline
            value={postText}
            onChangeText={(text) => {
                setPostText(text)
            }}
        />
        <Button onPress={() => {
            createTextPost(postText, (isSuccess, data) => {
                setPostText('')
                getPosts()
            })


        }}>Post</Button>


        <FlatList
        style={{flex:1}}
            data={allPosts}

            renderItem={({item}) => <View style={{padding:10,borderWidth:1}}>
                <Text>{item?.content}</Text>
            </View>}
        />
    </View>
}

export default Home;