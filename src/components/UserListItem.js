
import { useNavigation } from '@react-navigation/native';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ListItemOne = ({ data }) => {

    let { name, email } = data;
    return <View style={{ marginLeft: 10, marginTop: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 14, }}>{email}</Text>
    </View>
}

const UserListItem = ({ data, onDelete }) => {

    let { name, email } = data;
    const navigation = useNavigation()
    // https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010
    return <TouchableOpacity
        onPress={() => {
            navigation.navigate('Details', { user: data })
        }}
        style={{ backgroundColor: '#fff', flex: 1, padding: 10, marginBottom: 7, borderRadius: 10 }}>

        <View style={{ flexDirection: 'row' }}>

            <Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010' }}
            />
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 14, }}>{email}</Text>
            </View>

            <TouchableOpacity onPress={() => {
                onDelete(data)
            }}>
                <Text style={{ fontSize: 14, color: 'red' }}>{'DELETE'}</Text>
            </TouchableOpacity>
        </View>

    </TouchableOpacity>

}



export default UserListItem