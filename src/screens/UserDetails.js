

import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';




const UserDetails = () => {

    let {params} = useRoute()

    let {user} = params

    return <View style={{ marginLeft: 10, marginTop: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.name}</Text>
        <Text style={{ fontSize: 14, }}>{user.email}</Text>
    </View>
}

export default UserDetails;