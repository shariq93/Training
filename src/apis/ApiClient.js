import { getUser } from "../storage/Storage";

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
            if (result.message) {
                onSuccess(false, result)
            } else {
                onSuccess(true, result)
            }

        })
        .catch(error => onSuccess(false, error));
}



export const createTextPost = async (text, onSuccess) => {

    const user = await getUser()
    var formdata = new FormData();
    formdata.append("content", text);
    formdata.append("user", user.id);

    console.log(formdata);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch(BASE_URL + "collections/posts/records", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log({result});
            if (result.message) {
                onSuccess(false, result)
            } else {
                onSuccess(true, result)
            }

        })
        .catch(error => onSuccess(false, error));
}


export const getAllPosts = async ( onSuccess) => {

    const user = await getUser()
    var formdata = new FormData();
   

    var requestOptions = {
        method: 'GET',
        
        redirect: 'follow'
    };

    fetch(BASE_URL + "collections/posts/records", requestOptions)
        .then(response => response.json())
        .then(result => {
           
         
              console.log(result);

                onSuccess(true, result)


        })
        .catch(error => onSuccess(false, error));
}

export const registerUser = (name, username, email, password, onSuccess) => {
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("passwordConfirm", password);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    let url = BASE_URL + "collections/users/records"
    console.log(url);
    fetch(BASE_URL + "collections/users/records", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.message) {
                onSuccess(false, result)
            } else {
                onSuccess(true, result)
            }

        })
        .catch(error => onSuccess(false, error));
}