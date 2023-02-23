import axios from 'axios' 

// its going to check from localStorage (broswer)
const setAuthToken = token => {
    if (token) {
        // the header we want to set is [<'HERE'>]
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    };
};

export default setAuthToken;
