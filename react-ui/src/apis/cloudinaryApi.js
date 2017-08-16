import React, { Component } from 'react';
import {processImage} from './computerVisionApi';

export const uploadToCloud = (img) => {
	const API_KEY = "997985792621783";
	const API_SECRET = "2qIjeqf2Jx5GqCfZKf1KJi0_BWc";
	const upload_url = "https://api.cloudinary.com/v1_1/y77cao/image/upload";
	const upload_preset = "ufjcdo6h";
	// Perform the REST API call.

  const data = new FormData();
  data.append('file', img);
  data.append('upload_preset', upload_preset);
  data.append('api_key', API_KEY);

  const xhr = new XMLHttpRequest();
  xhr.open('POST',upload_url,false);
  xhr.send(data);
  const imageResponse = JSON.parse(xhr.responseText);
  const image_url = imageResponse.secure_url;
  //console.log(image_url);
  //processImage(image_url);
  return new Promise((resolve, reject) => resolve(image_url));
  /*
        fetch (upload_url, {
            headers: {
                'Content-Type': "application/json",
            },
            method: "POST",
            // Request body.
            body: JSON.stringify({
              "file":img.uri,
              "upload_preset": upload_preset

  })
        })
        .then(res => res.json())
        .then(data => {
            // Show formatted JSON on webpage.
			console.log(JSON.stringify(data, null, 2));
           // $("#responseTextArea").val(JSON.stringify(data, null, 2)); 
        })
        .catch(err => console.log(err)); */
} 