import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {css} from 'aphrodite';
import {styles} from '../styles/styles';
import bg from '../styles/bg.jpg';

export class Preview extends React.Component {
	render() {
		return (
	      <div className={css(styles.full)}>
	         <img  className={css(styles.previewImg, styles.center)}
	         src={(this.props.url === ''? '' : this.props.url)} />
	      </div>
   );
  }
}

Preview.propTypes = {
	url: PropTypes.string.isRequired,
}