/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Josefin Sans:600i', 'sans-serif']
  }
});

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: bisque;
    height: 100vh;
  `,
  NewPollText: styled.h1`
    font-size: 10rem;
    font-family: Josefin Sans;
  `,
  PollInput: styled.input`
    width: 35%;
    padding: 5%;
    border-radius: 25rem;
    font-size: 4rem;
  `,
  seperator: styled.p`
    font-size: 2rem;
    font-family: Josefin Sans
  `,
}

class Main extends React.Component {

  render() {
    return (
      <styles.Container>
        <styles.NewPollText>
          <Link style={{ textDecoration: 'none' }} to='/new'><em>New Poll</em></Link>
        </styles.NewPollText>
        <styles.seperator><em>-or-</em></styles.seperator>
        <styles.PollInput type="text" placeholder="Enter Poll Code" />
        <button>Go!</button>
      </styles.Container>
    );
  }
}

export default Main;