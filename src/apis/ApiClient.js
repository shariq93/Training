
const BASE_URL = 'http://199.188.203.162:8090/api/'


export const loginUser = (username, password, onSuccess) => {
    var formdata = new FormData();
    formdata.append("identity", username);
    formdata.append("password", password);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch(BASE_URL + "collections/users/auth-with-password", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.message){
                onSuccess(false, result)
            }else{
                onSuccess(true, result)
            }
           
        })
        .catch(error => onSuccess(false, error));
}