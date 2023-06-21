

import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from '../actions/AppActions';




const UserDetails = () => {

    let {params} = useRoute()
    let {count} = useSelector((state) => state.app)
    const discpatch = useDispatch()
    // let {user} = params

    return <View style={{ marginLeft: 10, marginTop: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Count: {count}</Text>
        <Button onPress={()=>{
discpatch(updateCounter(count+5))
        }}> Plus five</Button>
        {/* <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.name}</Text>
        <Text style={{ fontSize: 14, }}>{user.email}</Text> */}
    </View>
}

export default UserDetails;