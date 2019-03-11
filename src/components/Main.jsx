/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    
  `,
}

class Main extends React.Component {

  render() {
    return (
      <styles.Container>
        <styles.NewPollText>
          <Link style={{ textDecoration: 'none' }} to='/new'><em>New Poll</em></Link>
        </styles.NewPollText>
        <div>
          <input type="text" placeholder="Enter Poll Code" />
          <button>Go!</button>
        </div>
      </styles.Container>
    );
  }
}

export default Main;