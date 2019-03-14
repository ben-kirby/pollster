import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Josefin Sans:400', 'sans-serif']
  }
});

const styles = {
  optionButton: styled.div`
    width: 20rem;
    height: 5rem;
    border: none;
    border-radius: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FCF6EF;
    margin-bottom: 2%;
    box-shadow: inset 2px 2px 0 0 rgba(17, 17, 31, 0.25);
  `,
  content: styled.div`
    
  `,
  percentBar: styled.div`
    background-color: bisque;
  `,
  buttonText: styled.div`
    display: flex;
  `,
  optionName: styled.div`
    margin-left: 10%;
  `,
  optionVotes: styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 2% 0 0;
    height: 100%;
    border-left: 2px solid #CED3DC;
  `,
  optionText: styled.p`
    padding-top: 4px;
    font-family: Josefin Sans;
    font-size: 1.2rem;
    color: #275DAD;
  `,

};

class VoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.calculateVotePercentage = this.calculateVotePercentage.bind(this);
  }

  calculateVotePercentage() {
    return toString(((this.props.votes / this.props.totalVotes) * 100));
  }

  render() {
    // let percentStyle = 'width:' + this.calculateVotePercentage() + '%';

    return (
      <styles.optionButton id={this.props.id} onClick={this.props.onClick}>

        <styles.optionName>

          <styles.optionText>
            {this.props.name}
          </styles.optionText>
          
        </styles.optionName>

        <styles.optionVotes>

          <styles.optionText>
            {this.props.votes}
          </styles.optionText>

        </styles.optionVotes>

      </styles.optionButton >
    );
  }
}

VoteButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  votes: PropTypes.number,
  totalVotes: PropTypes.number,
  id: PropTypes.number,
};

export default VoteButton;