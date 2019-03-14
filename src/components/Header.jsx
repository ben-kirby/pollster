import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import { withRouter } from "react-router-dom";

WebFont.load({
  google: {
    families: ['Josefin Sans:600i', 'sans-serif']
  }
});

const styles = {
  container: styled.div`
    display: flex;
    margin: 15px 0 0 15px;
    align-items: center;

  `,
  link: {
    textDecoration: 'none',
    fontFamily: 'Josefin Sans',
    color: '#275DAD',
  },
  seperator: styled.p`
  margin: 0 5px 0 5px;
  font-family: Josefin Sans;
  color: #275DAD;
  font-size: 1.2rem;
  `,
  input: styled.input`
    box-shadow: inset 1px 1px 0 0 rgba(17, 17, 31, 0.25);
    border-radius: 25rem;
    border: none;
    background-color: #FCF6EF;
    color: #275DAD;
    padding: 5px;
  `,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handlePollIdSubmit = this.handlePollIdSubmit.bind(this);
  }

  handlePollIdSubmit() {
    event.preventDefault();    
    this.props.history.push('/' + document.getElementById('headerSearch').value);
  }

  render() {
    return (
      <styles.container>
        <Link style={styles.link} to='/#'>Home</Link>
        <styles.seperator>|</styles.seperator>
        <Link style={styles.link} to='/new'>New</Link>
        <styles.seperator>|</styles.seperator>
        <form onSubmit={this.handlePollIdSubmit}>
          <styles.input placeholder='search for poll' id='headerSearch' type="text" />
        </form>
      </styles.container>
    );
  }
}



export default withRouter(Header);