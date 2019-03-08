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
      pollName: null,
      pollOptions: null
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getFirebasePoll(this.state.pollID));
  }


  componentDidUpdate(){
    if (this.state.pollFound === false) {      
      this.setState({
        pollName: this.props.pollInfo.poll.name,
        pollOptions: this.props.pollInfo.poll.options,
        pollFound: true,
      });
      
    }
    
  }
  
  render(){  
    
    let initialRender;
    if (this.state.pollFound === false) {
      initialRender = (
        <div>
          Loading...
          {this.state.pollName}
        </div>
      );
    } else {
      initialRender = (
        <div>
          {this.state.pollName}
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
    pollInfo: state.PollReducer.poll,
  };
};

Poll.propTypes = {
};

export default connect(mapStateToProps)(Poll);