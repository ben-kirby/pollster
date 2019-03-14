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
  container: styled.div`
    display: flex;
    margin: 15px 0 0 15px;

  `,
  link: {
    marginRight: '10px',
    textDecoration: 'none',
    fontFamily: 'Josefin Sans',
    color: '#275DAD',
  }
};

function Header() {
  return(
    <styles.container>
      <Link style={styles.link} to='/#'>Home</Link>
      <Link style={styles.link} to='/new'>New</Link>
    </styles.container>
  );
}

export default Header;