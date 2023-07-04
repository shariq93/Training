import AsyncStorage from '@react-native-async-storage/async-storage';




export const onLogin = (data) => {
    AsyncStorage.setItem("@user", JSON.stringify(data.record))
    AsyncStorage.setItem("@token", JSON.stringify(data.token))
    AsyncStorage.setItem("@isLogin", '1')
}
export const onLogout = () => {
    AsyncStorage.removeItem("@user")
    AsyncStorage.removeItem("@token")
    AsyncStorage.removeItem("@isLogin")
}

export const getUser = async () => {
    const json = await AsyncStorage.getItem('@user')
    const user = JSON.parse(json)
    return user;

}