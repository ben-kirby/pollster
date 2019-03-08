/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import { connect } from 'react-redux';



class Poll extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pollInfo: null,
      pollID: this.props.location.pathname.replace(/[/]/g, ""),
      pollFound: false,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { getFirebasePoll } = actions;
    this.setState({pollInfo: dispatch(actions.getFirebasePoll(this.state.pollID)) });
    
  }
  
  render(){  
     
    let initialRender;
    if (this.state.pollFound === false) {
      initialRender = (
        <div>
          Loading...
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

Poll.propTypes = {
  location: PropTypes.object,
};

export default connect()(Poll);