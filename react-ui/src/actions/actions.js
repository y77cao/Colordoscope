//import {uploadAndProcessImage} from '../apis/uploadApi';
import {processImage} from '../apis/computerVisionApi';
import {uploadToCloud} from '../apis/cloudinaryApi';
import {shutterStockSearch} from '../apis/shutterStockApi';

const blobToDataURL = (blob) => {
   //callback version:
   /* var fr = new FileReader();
    fr.onload = (e) => {callback(e.target.result);}
    fr.readAsDataURL(blob); */
   //promise version:
   return new Promise((resolve, reject) => {
    var fr = new FileReader();  
    fr.onload = () => resolve(fr); 
    fr.readAsDataURL(blob);
  });
};

const uploadAndProcessImage = (img) => {
  var f = new Blob(img, {type: "img"});
  return blobToDataURL(f)
  .then(res => uploadToCloud(res.result))
  .then(url => processImage(url))
  .then(res => res.json())
  .then(data => shutterStockSearch(data))
  //.then(q => console.log(JSON.stringify(q, null, 2)))
  //.then(imgResQuery => console.log(JSON.stringify(imgResQuery, null, 2)))
   // console.log(JSON.stringify(data['description']['tags'], null, 2)))
  //.then(jsonRes => console.log("In upload:" + jsonRes['description']['tags']))
  .catch(err => console.log("In uploadAndProcessImage:"+err));
}

const createTempURL = (img) => {
  var f = new Blob(img, {type: "img"});
  var tempURL = URL.createObjectURL(f);
  console.log(tempURL);
  return new Promise((resolve) => resolve(tempURL));
};


const previewAction = (url) => {
  //console.log('in preview action:' + url);
  return {
    type: 'RENDER_PREVIEW',
    url
  }
}

 const requestQueryAction = (img) => {
	return {
		type:'REQUEST_QUERY',
		img
	}
};

const receiveQueryAction = (img, query) => {
	return {
		type: 'RECEIVE_QUERY',
		img,
		query,
		receiveAt: Date.now()
	}
}

export const fetchQueryAction = (img) => {
	return dispatch => {
    dispatch(renderAction(img));
		//dispatch(requestQueryAction(img));
		//return uploadAndProcessImage(img)
		//.then(res => dispatch(receiveQueryAction(img, res)))
	}
}

//Action chain: 
// create URL for preview -> request image query -> upload and process dropped image -> receive query
const renderAction = (img) => {
  return dispatch => {
    return createTempURL(img)
    .then(res => dispatch(previewAction(res)))
    .then(() => dispatch(requestQueryAction(img)))
    .then(() => uploadAndProcessImage(img))
    .then(res => dispatch(receiveQueryAction(img, res)))
  }
}

 export const renderLargeViewAction = (largeViewUrl) => {
  return {
    type:'RENDER_LARGE_VIEW',
    largeViewUrl
  }
}

export const imgCancelAction = () => {
  return {
    type:'CANCEL_LARGE_VIEW',
  }
}