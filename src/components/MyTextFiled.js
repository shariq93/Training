

import { TextInput, } from 'react-native';


const MyTextFiled = ({ onChange, placeHolder, style }) => {



    return <TextInput
        onChangeText={onChange}
        placeholder={placeHolder ||  'Search here...'}
        style={
            [
                {
                    width: "100%", height: 45, backgroundColor: '#fff', marginBottom: 10, paddingHorizontal: 10,
                    borderWidth: 1, borderColor: '#95a5a6', borderRadius: 7
                },
                style,
            ]}
    />

}



export default MyTextFiled