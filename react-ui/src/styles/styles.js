import React, { Component } from 'react';
import { StyleSheet } from 'aphrodite';
import bg from './bg.jpg';
import {headerFont, contentFont} from './fonts';

export const dropzone = {
	 	width: '80%',
		height: '30%',
		bottom: 0,
		left: 0,
		right: 0,
		top: 0,
		margin: 'auto',
	//	marginTop: '20%',
		position: 'absolute',
		borderStyle: 'none',
		borderRadius: '20px',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: '998',
}

const rotateKeyFrames = {
	'from':  {
			transform: 'rotate(0deg)'
		},
	'to':  {
		    transform: 'rotate(359deg)'
		}
};

export const styles = StyleSheet.create ( {
	center: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		position: 'absolute',
	},

	rotateCenter: {
		position: 'absolute',
        left: '25%',
        top: '25%',
        transform: 'translate(-25%,-25%)',
	},

	black: {
		backgroundColor: '#000',
			},

	full: {
		height: '100%',
		width: '100%',
		margin: 0,
		position: 'absolute',
		textAlign: 'center',
	},

	mainBg: {
		background: 'url('+ bg + ') no-repeat center fixed',
		backgroundSize: 'cover',
	},

	rotateContainer: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	},

	rotate: {
		margin: 0,
		width: '80%',
		height: 'auto',
		zIndex: '0',
		animationName: [rotateKeyFrames],
		animationDuration: '360s',
		animationIterationCount: 'infinite',
	},

	header: {
		color: '#fff',
		fontFamily: [headerFont],
		margin: 0,
	},

	mainHeader: {
		fontSize: '8vw',
	},

	subHeader: {
		fontSize: '2vw',
	},

	headersPos: {
		position: 'absolute',
		zIndex: '999',
		left: 0,
		right: 0,
		top: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	uploadText: {
		color: '#fff',
		//marginTop: '10%',
		fontSize: '2vw',
		position: 'absolute',
		top: '50%',
		left: 0,
		right: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		fontFamily: [contentFont],
	},

	loadingImg: {
		width: '5%',
		height: 'auto',
		position: 'absolute',
		top: '40%',
		left: 0,
		right: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	resultContainerCell: {
		top: '65%',
	    textAlign: 'center',
	    overflow: 'scroll',

	},

	previewImg: {
		width: '20%',
		height: 'auto',
		marginTop: '10%',
	},

	resultList: {
		padding: 0,
		zIndex: '999',
		textAlign: 'center',
		paddingLeft: '5%',
		paddingRight: '5%',
		//display: 'table',
	},

	resultListItem: {
		listStyle: 'none',
		display: 'inline',
		margin:'1%',
	}
});