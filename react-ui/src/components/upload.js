import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchQueryAction} from "../actions/actions";
import {Link} from 'react-router-dom';
import {Result} from './result';
import {Preview} from './preview';
import {css} from 'aphrodite';
import {styles, dropzone} from '../styles/styles';
import loading from '../styles/loading.gif';
import rotate from '../styles/rotate.png';

export class Upload extends React.Component  {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(img) {
    this.props.dispatch(fetchQueryAction(img));
  }


  render() {
    const {isFetching, imgQuery, url} = this.props;
    return (
     <section className={css(styles.full, styles.black)}>
      <div className={css(styles.rotateContainer, styles.center)}>
       <img src={rotate} className={css(styles.rotate, styles.center)} />
      </div>

       <div className={css(styles.headersPos)}>
          <h1 className={css(styles.header, styles.mainHeader)}>COLORDOSCOPE</h1>
          <h2 className={css(styles.header, styles.subHeader)}>Intelligent Image Search Engine</h2>
       </div>

        <div className={css(styles.uploadResultContainerCell)}>
               <Dropzone
                   style={dropzone}
                    multiple={false}
                   accept="image/jpeg, image/png"
                   onDrop={(accepted, rejected) => this.handleDrop(accepted)}
               > 
               {({acceptedFiles, rejectedFiles }) => {
   return (acceptedFiles.length)? 
                ((isFetching)?  <img src={loading} className={css(styles.loadingImg)} /> 
                  : ((imgQuery.length === 0)? <h2 className={css(styles.uploadText)}>Cannot find anything...Sorry. Search again?</h2> 
                  : <div className={css(styles.uploadText)}>Search again by dropping image or clicking to upload.</div>))
                  : <div className={css(styles.uploadText)}>Drop image or click to upload.</div>;
 }}
                  
               </Dropzone>

             <Preview url={url} />
             <Result query={imgQuery} />
        </div>

      </section> 
      );
    }
    
}

 /*   {accepted.length && <div className={css(styles.uploadText)}>Drop image or double click to upload.</div>}
                  {accepted.length && isFetching && imgQuery.length === 0 && <h2>Loading...</h2>}
                  {accepted.length && Fetching && imgQuery.length === 0 && <h2>Empty.</h2>} */

Upload.PropTypes = {
  imgQuery: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
}