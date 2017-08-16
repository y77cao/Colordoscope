import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import {styles} from '../styles/styles';

export class Result extends React.Component {
	render() {
		return (
	      <div className={css(styles.center, styles.resultContainerCell)}>
	           <ul className={css(styles.resultList)}>
	                {this.props.query.map((img, i) => 
	                	<li className={css(styles.resultListItem)}
	                	key={i}><img src={img['assets']['large_thumb']['url']} /></li>)}
	           </ul>
	      </div>
   );
  }
}

Result.propTypes = {
	query: PropTypes.array.isRequired,
}