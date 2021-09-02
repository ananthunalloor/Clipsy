const axios = require('axios');

var result = null;

const config = {
    method: 'get',
    headers: {
        Authorization: process.env.AUTH,
        'client-id': process.env.CLIENT_ID,
    },
};

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { 'Allow': 'GET' }
        }
    }
    const data = event.queryStringParameters
    if (!data.id) {
        return { statusCode: 422, body: 'A clip ID is required.' }
    }

    try {
        await axios(process.env.API_URL +'clips?id='+ data.id ,config).then(function (responce) {
            result = responce.data;
        })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        return {
            statusCode: 422,
            body: `Error : ${error}`,
        };
    }
console.log(result);
    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}