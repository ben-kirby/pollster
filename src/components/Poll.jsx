/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFirebasePoll } from '../actions/index'



class Poll extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pollID: this.props.location.pathname.replace(/[/]/g, ""),
      pollFound: false,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getFirebasePoll(this.state.pollID));
  }
  
  render(){  
    let poll = this.props.pollInfo;
     
    let initialRender;
    if (this.state.pollFound === false) {
      initialRender = (
        <div>
          Loading...
          {poll}
          <p>
            {this.state.pollInfo}
          </p>
        </div>
      );
    } else {
      initialRender = (
        <div>
          Found something!
        </div>
      );
    }
    
    return(
      <div>

        {initialRender}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pollInfo: state.pollInfo
  };
};

Poll.propTypes = {
  location: PropTypes.object,
};

export default connect(mapStateToProps)(Poll);