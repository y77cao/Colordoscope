import { connect } from 'react-redux';
import {Upload} from '../components/upload';



const mapStateToProps = (state) => {
	return {
		 isFetching: state.result.isFetching,
	     imgQuery: state.result.imgQuery,
	     url: state.result.url,
   }
};

export default connect(
  mapStateToProps
)(Upload);