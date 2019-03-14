/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import PollSearchForm from './Reusable/PollSearchForm';
import NewOrExisting from './Reusable/NewOrExisting';

WebFont.load({
  google: {
    families: ['Josefin Sans:600i', 'sans-serif']
  }
});

const styles = {
  Container: styled.div`
    display: flex;
    padding-top: 5%;
    flex-direction: column;
    align-items: center;
    background: #CED3DC;
  `,
  NewPollText: styled.h1`
    font-size: 10rem;
    font-family: Josefin Sans;
    margin-bottom: 0%;
    
  `,
  seperator: styled.p`
    font-size: 4rem;
    font-family: Josefin Sans;
    color: #ABA9C3

  `,
  header: {
    textDecoration: 'none',
    color: '#275DAD'
  },
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handlePollIdSubmit = this.handlePollIdSubmit.bind(this);
  }

  handlePollIdSubmit() {
    event.preventDefault();
    this.props.history.push('/' + document.getElementById('pollID').value);
  }

  render() {
    return (
      <styles.Container>
        <NewOrExisting
          onSubmit={this.handlePollIdSubmit}
        />
      </styles.Container>
    );
  }
}

export default Main;