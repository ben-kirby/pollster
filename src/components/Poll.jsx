/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFirebasePoll, updatePoll } from '../actions/index';
import { v4 } from 'uuid';

import VoteButton from '../components/Reusable/VoteButton';
import Loading from '../assets/Loading.gif';
import styled from 'styled-components';

const Container = styled.div`
  background-color: tomato;
`;


class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollID: this.props.location.pathname.replace(/[/]/g, ''),
      pollFound: false,
      pollName: null,
      pollOptions: null
    };
    this.handleVote = this.handleVote.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getFirebasePoll(this.state.pollID));
  }

  componentDidUpdate() {
    if (this.state.pollFound === false) {
      this.setState({
        pollName: this.props.pollInfo.poll.name,
        pollOptions: this.props.pollInfo.poll.options,
        pollFound: true,
      });
    }
  }

  handleVote(e) {
    const { dispatch } = this.props;    
    let update = this.state.pollOptions;
    update[e.target.id].optionVotes = update[e.target.id].optionVotes + 1;
    let updateInfo= {
      id: this.state.pollID,
      name: this.state.pollName,
      options: update,
    };

    dispatch(updatePoll(updateInfo));
  }

  render() {
    let initialRender;

    if (this.state.pollFound === false) {
      initialRender = (
        <Container>
          <img src={Loading}/>
        </Container>
      );

    } else {
      initialRender = (
        <div>
          <div>
            {this.state.pollName}
          </div>
          <ul>
            {this.state.pollOptions.map((option, index) =>
              <VoteButton
                id={index}
                name={option.optionName}
                votes={option.optionVotes}
                onClick={this.handleVote}
                key={v4()}
              />
            )}
          </ul>
        </div>
      );
    }

    return (
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
  dispatch: PropTypes.func,
  pollInfo: PropTypes.object,
  location: PropTypes.object
};

export default connect(mapStateToProps)(Poll);