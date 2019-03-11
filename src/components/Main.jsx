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
    padding-top: 5%;
    flex-direction: column;
    align-items: center;
    background: #CED3DC;
    height: 100vh;
  `,
  NewPollText: styled.h1`
    font-size: 10rem;
    font-family: Josefin Sans;
    margin-bottom: 0%;
    
  `,
  PollInput: styled.input`
    border: none;
    padding: 5%;
    border-radius: 25rem;
    font-size: 3.75rem;
    box-shadow: inset 4px 4px 0 0 rgba(17, 17, 31, 0.25);
    text-align: center;
    background-color: #FCF6EF;
    color: #275DAD;
  `,
  seperator: styled.p`
    font-size: 4rem;
    font-family: Josefin Sans;
    color: #ABA9C3

  `,
  header: {
    textDecoration: 'none',
    color: '#275DAD'
  }
};

class Main extends React.Component {

  render() {
    return (
      <styles.Container>
        <styles.NewPollText>
          <Link style={styles.header} to='/new'><em>New Poll</em></Link>
        </styles.NewPollText>
        <styles.seperator><em>-or-</em></styles.seperator>
        <styles.PollInput type="text" placeholder="Enter Poll Code" />
      </styles.Container>
    );
  }
}

export default Main;