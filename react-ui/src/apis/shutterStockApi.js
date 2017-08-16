import React from 'react';

const API_URL = 'https://api.shutterstock.com/v2/images/search';
const id = "281c2d0fecdf2e0de267";
const secret = "be0b3a8c2a52d31aae3586570fa929a97b709aa3";

const encodeAuthorization = ()  => {
    const clientId = "281c2d0fecdf2e0de267";
    const clientSecret = "be0b3a8c2a52d31aae3586570fa929a97b709aa3";
    return 'Basic ' + btoa(clientId + ':' + clientSecret);
};

const getQueryStr = (queryArr) => {
    var len = 0;
    if (queryArr.length < 3) {
        len = queryArr.length - 1;
    }
    else {
        len = 3;
    }
    var query = "";
    for (var i = 0; i < len - 1; ++i) {
        query += queryArr[i] + "%2C%20";
    }
    query += queryArr[len];
    console.log(query);
    return query;
};

const getParamAndSearchURL = (json) => {
    const query = getQueryStr(json['description']['tags']);
    //Useful function that maps object field to search query having format something=balalbala&other=balabala
    /*
    const params = {
    "color": json['color']['accentColor'],
    "query": query
  };

  const esc = encodeURIComponent;
  const res = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&'); */
  const url = API_URL+ '?'+"color="+json['color']['accentColor']+"&&&&&&&license=commercial&&&&&&&&&&"+"query="+query+"&&sort=popular&&view=minimal&&&";
  console.log("In Shutter search API we got search URL:" + url);
  return url;
}; 

export const shutterStockSearch = (tags) => {
    var authorization = encodeAuthorization();
    var reqURL = getParamAndSearchURL(tags);
    var requestParameter = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Authorization': authorization
        }
    }

    return fetch(reqURL, requestParameter)
    .then(res => res.json())
    //.then(q => console.log(JSON.stringify(q, null, 2)))
    .catch(err => console.log("In shutterStock FETCH:" + err));
}

