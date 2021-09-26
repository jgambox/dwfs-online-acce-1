const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getExternalResource(url) {
    const data = await axios.get(url);
    return data;
}

Promise.all([
    getExternalResource(process.env.axios_url_1),
    getExternalResource(process.env.axios_url_2)])
    .then(res => {
        console.log(res[0].data);
        console.log(res[1].data);
    })
    .catch(err => console.log(err));

/*
axios.get('https://5f95f54111ab98001603a242.mockapi.io/v1/devcollection2')
    .then((response) => {
        console.log(response.data);
    })


function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
        const acct = results[0];
        const perm = results[1];
    });
*/
