import React, { Component } from 'react';

export const processImage = (sourceImage) => {
        //console.log("in API:"+sourceImage);
        var subscriptionKey = "64871b54ac19423aa74fa0a83ae66121";
        var API_URL = "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze";
        var reader = new FileReader();

        // Request parameters.
        var params = {
            "visualFeatures": "Categories,Description,Color",
            "details": "",
            "language": "en",
        };

        var esc = encodeURIComponent;
        var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
        var url = API_URL+ '?'+query;


        // Perform the REST API call.
        return fetch (url, {
            headers: {
                'Content-Type': "application/json",
                'Ocp-Apim-Subscription-Key': subscriptionKey
            },
            method: "POST",
            // Request body.
            body: '{url: "' + sourceImage +'"}'
        })
        .catch((err) => console.log("In Computer Vision FETCH API:"+ err));
    };