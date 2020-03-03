import axios from 'axios';

export const addContact = data => dispatch => {
    return axios.post('https://project-linggo.herokuapp.com/contact/add',data).then(res => {
        alert('Successfulyy send');
        window.location.reload();
    })
}