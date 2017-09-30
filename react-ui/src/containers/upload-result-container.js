import { connect } from 'react-redux';
import {Upload} from '../components/upload';



const mapStateToProps = (state) => {
	return {
		 isFetching: state.result.isFetching,
	     imgQuery: state.result.imgQuery,
	     url: state.result.url,
	     largeViewUrl: state.result.largeViewUrl
   }
};

export default connect(
  mapStateToProps
)(Upload);