/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { v4 } from 'uuid';
import shortid from 'shortid';
import { addPoll } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';

import InputField from './Reusable/InputField';
import Button from './Reusable/Button';

WebFont.load({
  google: {
    families: ['Josefin Sans:600i', 'sans-serif']
  }
});

const styles = {
  generatedLink: {
    fontSize: '2rem',
  },
  container: styled.div`
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  pollName: {
    marginTop: '0.67em',
    border: 'none',
    padding: '5%',
    borderRadius: '25rem',
    fontSize: '3.75rem',
    boxShadow: 'inset 4px 4px 0 0 rgba(17, 17, 31, 0.25)',
    textAlign: 'center',
    backgroundColor: '#FCF6EF',
    color: '#275DAD'
  },
  pollForm: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  options: styled.p`
    font-size: 4rem;
    font-family: Josefin Sans;
    color: #ABA9C3;
    margin-bottom: 0px;
  `,
  optionForm: {
    marginTop: '5px',
    border: 'none',
    padding: '3%',
    borderRadius: '25rem',
    fontSize: '2.25rem',
    boxShadow: 'inset 4px 4px 0 0 rgba(17, 17, 31, 0.25)',
    textAlign: 'center',
    backgroundColor: '#FCF6EF',
    color: '#275DAD'
  },
  buttonDiv: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 5%;

  `,
  addButton: {
    fontSize: '1.25rem',
    borderRight: 'none',
    padding: '3%',
    width: '50%',
    marginRight: '0px',
    textAlign: 'center',
    flexGrow: '1',
    backgroundColor: '#FCF6EF',
    borderTopLeftRadius: '25rem',
    borderBottomLeftRadius: '25rem',
  },
  submitButton: {
    fontSize: '1.25rem',
    width: '50%',
    padding: '3%',
    backgroundColor: '#FCF6EF',
    borderTopRightRadius: '25rem',
    borderBottomRightRadius: '25rem',
    marginLeft: '0px',
    textAlign: 'center',
    flexGrow: '1',
  },
};

class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      shortID: null,
      options: [
        {
          optionName: '',
          optionVotes: 0,
        },
        {
          optionName: '',
          optionVotes: 0,
        }
      ],
    };
    this.generateShortID = this.generateShortID.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateShortID() {
    let newShortID = shortid.generate();
    this.setState({
      shortID: newShortID
    });
  }

  handleAddOption() {
    let newOptions = this.state.options;
    newOptions.push({
      optionName: '',
      optionVotes: 0
    });
    this.setState({ options: newOptions });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.generateShortID();
    this.setState({ formSubmitted: true });
    const { dispatch } = this.props;
    let newOptions = [];
    for (let index = 0; index < this.state.options.length; index++) {
      newOptions.push({
        optionName: document.getElementById(index).value,
        optionVotes: 0
      });
    }
    let newPollInfo = {
      name: e.target.name.value,
      options: newOptions,
      id: this.state.shortID
    };
    dispatch(addPoll(newPollInfo));
  }

  render() {
    let initialRender;
    if (this.state.formSubmitted === false) {
      initialRender = (
        <styles.container>
          <styles.pollForm onSubmit={this.handleSubmit}>
            <InputField
              style={styles.pollName}
              id='name'
              type='text'
              placeholder='Poll Name'
            />
            <styles.options><em>-options-</em></styles.options>
            <styles.container>
              {this.state.options.map((option, index) =>
                <InputField
                  style={styles.optionForm}
                  id={index}
                  type='text'
                  key={v4()}
                />
              )}
              <styles.buttonDiv>
                <Button
                  style={styles.addButton}
                  type='button'
                  onClick={this.handleAddOption}
                  text="Add Option"
                />
                <Button
                  style={styles.submitButton}
                  type='submit'
                  text="Create New Poll"
                />
              </styles.buttonDiv>
            </styles.container>
          </styles.pollForm>
        </styles.container>
      );
    } else {
      console.log(this.state.shortID);
      initialRender = (
        
        <div>
          <Link style={styles.generatedLink} to={`/${this.state.shortID}`}>Poll created! Here's your code: {this.state.shortID}</Link>
        </div>
      );
    }
    return (
      <styles.container>
        {initialRender}
      </styles.container>
    );
  }
}

NewPoll.propTypes = {
  dispatch: PropTypes.func,
};


export default connect()(NewPoll);