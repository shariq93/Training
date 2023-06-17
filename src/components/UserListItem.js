
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const UserListItem = ({ data }) => {

    let { name, email } = data;

    // https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010
    return <View style={{ backgroundColor: '#fff', flex: 1,padding:10,marginBottom:7,borderRadius:10 }}>

        <View style={{ flexDirection: 'row' }}>

            <Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010' }}
            />
            <View style={{ marginLeft: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 14, }}>{email}</Text>
            </View>
        </View>

    </View>

}



export default UserListItem