import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import {styles} from '../styles/styles';

export class LargeView extends React.Component {
	render() {
		return (
	      <div onClick={this.props.handleCancel}
	           className={css(styles.center, styles.largeViewImg)}>
	            <img className={css(styles.center)}
	                 src={(this.props.largeViewUrl === ''? '' : this.props.largeViewUrl)} />
	      </div>
   );
  }
}

LargeView.propTypes = {
	largeViewUrl: PropTypes.string.isRequired,
	handleCancel: PropTypes.func.isRequired,
}