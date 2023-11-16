const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const apiUrl = `http://www.zippopotam.us/in/${event.queryStringParameters.path}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
