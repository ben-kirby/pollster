/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';


class Poll extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pollID: this.props.location.pathname.replace(/[/]/g, "")
    };
  }




  render(){    
    
    return(
      <div>

        hello
      </div>
    );
  }
}

Poll.propTypes = {
  location: PropTypes.object,
};

export default Poll;