import axios from 'axios';


export const requestHandler = {
    getService,
    postService
}

function getService(url) {
    //  var authOptions = {
    //      method: 'POST',
    //      url: 'http://10.254.147.184:7777/auth/oauth/token',
    //      data: qs.stringify(data),
    //      headers: {
    //          'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
    //          'Content-Type': 'application/x-www-form-urlencoded'
    //      },
    //      json: true
    //  };

    axios.get(url)
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}

function postService(url, request) {
    //  var authOptions = {
    //      method: 'POST',
    //      url: 'http://10.254.147.184:7777/auth/oauth/token',
    //      data: qs.stringify(data),
    //      headers: {
    //          'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
    //          'Content-Type': 'application/x-www-form-urlencoded'
    //      },
    //      json: true
    //  };

    axios.post(url, request)
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}