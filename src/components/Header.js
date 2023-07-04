

import { useNavigation } from '@react-navigation/native';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../utils/Theme';
const Header = ({ data }) => {
    const { width, height } = useWindowDimensions()

    // https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010
    return <View style={{ width: width, height: 90, backgroundColor: colors.primary }}>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
        <Feather name="menu" size={24} color="black" />
        </View>
    </View >

}



export default Header