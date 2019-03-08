/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';


class Poll extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pollID: this.props.location.pathname.replace(/[/]/g, ""),
      pollFound: false,
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const { watchFirebasePolls } = actions

  }
  render(){   
    let initialRender;
    if (this.state.pollFound === false) {
      initialRender = (
        <div>
          Loading...
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

export default Poll;