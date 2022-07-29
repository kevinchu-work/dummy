import axios from "axios";
// import { API_URL } from "./api-nonHook";
// import jwt_decode from 'jwt-decode';

// Constant
const API_URL = {
  SERVER_HOST: "https://microservice-identitymanagement.azurewebsites.net",
  LOGIN: "/api/identity/token",
  REFRESH_TOKEN: "/api/identity/token/refresh",
  // force_refresh: "/v1/authentication/tokens/refresh/force",
};


const LOGIN_URL = API_URL.SERVER_HOST + API_URL.LOGIN;
const defaultInput = { email: 'system@smls.io', password: "321Pa$$word!" };


export const simpleAXIOS = (data = defaultInput) => {

  // const postBody = JSON.stringify(data);
  console.log('postBody', data);

  axios.post(
    LOGIN_URL,
    data,
  )
  .then(response => console.log(response))
  .catch(err => console.log(err));

  // const decodedToken = jwt_decode(response.data);
  // console.log('decode', decodedToken);

  // return decodedToken; 

}
export const AXIOS2 = (data = defaultInput) => {

  // const postBody = JSON.stringify(data);
  console.log('postBody', data);

  axios.post(
    LOGIN_URL,
    data,
  )
  .then(response => console.log(response))
  .catch(err => console.log(err));

  // const decodedToken = jwt_decode(response.data);
  // console.log('decode', decodedToken);

  // return decodedToken; 

}



export const xmlHTTPRequest = (data = defaultInput) => {

  let req = new XMLHttpRequest();
  req.open('POST', LOGIN_URL, true);
  req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  req.send(data);

}

export const fetchReq = (data = defaultInput) => {

  fetch(
    LOGIN_URL,
    {
      method: 'POST',
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Content-Length": data.length,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // credentials: 'include',
      referrerPolicy: 'no-referrer',
      // body: data,
      body: JSON.stringify(data),
    }
  )
  .then(res => res.json())
  .then(
    (result) => {
      console.log("result", result);
    },
    (error) => {
      console.log("error", error);
    }
  )

}

export const hs = (d = defaultInput) => {

  const https = require("https");

  const data = JSON.stringify(d);
  
  const options = {
    hostname: "microservice-identitymanagement.azurewebsites.net",
    path: "/api/identity/token",
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
      "Content-Length": data.length,
      "Access-Control-Allow-Origin": "*",
      "Origin": "https://microservice-identitymanagement.azurewebsites.net",
    }
  };
  
  const req = https.request(
    options, 
    (res) => {
      let data = "";
  
      console.log("Status Code:", res.statusCode);
  
      res.on("data", (chunk) => {
        data += chunk;
      });
  
      res.on("end", () => {
        console.log("Body: ", JSON.parse(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err);
    }
  );
  
  req.write(data);
  req.end();
  
}