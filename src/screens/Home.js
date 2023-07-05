

import { useRoute } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';
import { onLogout } from '../storage/Storage';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { BASE_URL, createImagePost, createTextPost, getAllPosts } from '../apis/ApiClient';
import { FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';



const Home = () => {
    const [postText, setPostText] = useState('')
    const [allPosts, setAllPosts] = useState('')
    const { width, height } = useWindowDimensions()
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });



        if (!result.canceled) {

            createImagePost(postText, result.assets[0], (isSuccess, data) => {

            })
            //   setImage(result.assets[0].uri);
        }
    };

    useEffect(() => {
        getPosts()
    }, [])

    getPosts = () => {
        getAllPosts((isSuccess, data) => {
            if (isSuccess) {

                setAllPosts(data.items)
            }
        })
    }
    return <View style={{ flex: 1, }}>
        <Header title={'Home Screen'} />


        <TextInput
            multiline
            value={postText}
            onChangeText={(text) => {
                setPostText(text)
            }}
        />
        <View>
            <Button onPress={() => {
                createTextPost(postText, (isSuccess, data) => {
                    setPostText('')
                    getPosts()
                })


            }}>Post</Button>


            <Button onPress={() => {
                // createTextPost(postText, (isSuccess, data) => {
                //     setPostText('')
                //     getPosts()
                // })
                pickImage()


            }}>Upload Image</Button>

        </View>

        <FlatList
            style={{ flex: 1 }}
            data={allPosts}

            renderItem={({ item }) => <View style={{ padding: 10, borderWidth: 1 }}>

               {item?.content && <Text>{item?.content}</Text>}
                {
                    item?.image && <Image source={{ uri: BASE_URL + 'files/posts/' + item.id + '/' + item.image }}
                        style={{ width: width, height: width*.8, resizeMode: 'cover' }}
                    >

                    </Image>
                }
            </View>}
        />
    </View>
}

export default Home;