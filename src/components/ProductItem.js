
import { useNavigation } from '@react-navigation/native';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const ProductItem = ({ data }) => {
    const { width, height } = useWindowDimensions()

    // https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010
    return <View style={{ width: width / 2, borderColor: '#ccc', borderWidth: .5 }}>
        <Image
            style={{ width: width / 2, height: width / 2, resizeMode: 'cover' }}
            source={{ uri: data.thumbnail }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{data.title}</Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>{`Price ${data.price} USD`}</Text>
    </View >

}



export default ProductItem