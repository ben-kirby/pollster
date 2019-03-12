import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import PollSearchForm from './PollSearchForm';

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
    margin: 0 0 0 0;
    
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

function NewOrExisting(props) {
  return(
    <styles.Container>
      <styles.NewPollText>
        <Link style={styles.header} to='/new'><em>New Poll</em></Link>
      </styles.NewPollText>
      <styles.seperator><em>-or-</em></styles.seperator>
      <PollSearchForm
        onSubmit={props.onSubmit}
      />
    </styles.Container>
  );
}

export default NewOrExisting;