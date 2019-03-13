import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFirebasePoll, updatePoll } from '../actions/index';
import { v4 } from 'uuid';
import WebFont from 'webfontloader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import VoteButton from '../components/Reusable/VoteButton';
import Loading from '../assets/loading.svg';
import NewOrExisting from './Reusable/NewOrExisting'

WebFont.load({
  google: {
    families: ['Josefin Sans:600i', 'sans-serif']
  }
});

const styles = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  `,
  Container: styled.div`
    background-color: #CED3DC;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  image: {
    boxShadow: '10px 10px',
  },
  notFoundHeader: styled.h1`
    font-family: Josefin Sans;
    color: #275DAD;
    text-align: center;
  `,
  header: {
    textDecoration: 'none',
    color: '#275DAD'
  },
  seperator: styled.p`
    font-size: 4rem;
    font-family: Josefin Sans;
    color: #ABA9C3
  `,
  pollName: styled.h1`
    font-family: Josefin Sans;
    color: #275DAD;
    text-align: center;
  
  `,
};

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollID: this.props.location.pathname.replace(/[/]/g, ''),
      pollSearched: false,
      pollName: null,
      pollOptions: null,
      totalVotes: 0
    };
    this.handleVote = this.handleVote.bind(this);
    this.handlePollIdSubmit = this.handlePollIdSubmit.bind(this);
    this.getTotalVotes = this.getTotalVotes.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getFirebasePoll(this.state.pollID));
  }

  componentDidUpdate() {
    if (this.state.pollSearched === false) {
      if (this.props.pollInfo.poll === null) {
        this.setState({ pollSearched: true });
      } else {
        this.setState({
          pollName: this.props.pollInfo.poll.name,
          pollOptions: this.props.pollInfo.poll.options,
          pollSearched: true
        });
        this.getTotalVotes(this.props.pollInfo.poll.options);
      }
    }
  }

  handleVote(e) {
    const { dispatch } = this.props;
    let update = this.state.pollOptions;
    update[e.target.id].optionVotes = update[e.target.id].optionVotes + 1;
    let updateInfo = {
      id: this.state.pollID,
      name: this.state.pollName,
      options: update,
    };
    dispatch(updatePoll(updateInfo));
  }

  handlePollIdSubmit() {
    event.preventDefault()
    this.props.history.push('/' + document.getElementById('pollID').value);
    window.location.reload();
  }

  getTotalVotes(poll) {
    let votes = 0;
    for (let index = 0; index < poll.length; index++) {
      const element = poll[index].optionVotes;
      votes += element;
    }
    this.setState({ totalVotes: votes });
  }

  render() {
    let initialRender;

    if (this.state.pollSearched === false) {
      initialRender = (
        <styles.Container>
          <img src={Loading} />
        </styles.Container>
      );
    } else {


      if (this.state.pollName === null) {
        initialRender = (
          <styles.Container>
            <styles.notFoundHeader>
              Uh oh... Looks like thats not a poll yet.
            </styles.notFoundHeader>
            <NewOrExisting
              onSubmit={this.handlePollIdSubmit}
            />
          </styles.Container>
        )
        console.log('no poll found');


      } else {
        // this.getTotalVotes();
        initialRender = (
          <styles.content>
            <styles.pollName>
              {this.state.pollName}
            </styles.pollName>
            {this.state.pollOptions.map((option, index) =>
              <VoteButton
                totalVotes={this.state.totalVotes}
                id={index}
                name={option.optionName}
                votes={option.optionVotes}
                onClick={this.handleVote}
                key={v4()}
              />
            )}
          </styles.content>
        );
      }
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