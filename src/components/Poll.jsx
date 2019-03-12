import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFirebasePoll, updatePoll } from '../actions/index';
import { v4 } from 'uuid';
import WebFont from 'webfontloader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import PollSearchForm from './Reusable/PollSearchForm';
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
    padding-top: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #CED3DC;
    height: 100vh;

  `,
  Container: styled.div`
    background-color: #CED3DC;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 5%;
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
};

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollID: this.props.location.pathname.replace(/[/]/g, ''),
      pollSearched: false,
      pollName: null,
      pollOptions: null
    };
    this.handleVote = this.handleVote.bind(this);
    this.handlePollIdSubmit = this.handlePollIdSubmit.bind(this);
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
    }

    return (
      <styles.content>
        {initialRender}
      </styles.content>
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