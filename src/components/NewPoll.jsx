/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { v4 } from 'uuid';
import shortid from 'shortid';
import { addPoll } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from './Reusable/InputField';
import Button from './Reusable/Button';

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
        <form onSubmit={this.handleSubmit}>
          <InputField
            id='name'
            type='text'
            placeholder='Poll Name'
          />
          <label>Options:</label>
          <div>
            {this.state.options.map((option, index) =>
              <InputField
                id={index}
                type='text'
                key={v4()}
              />
            )}
          </div>
          <div>
            <Button
              onClick={this.handleAddOption}
              text="Add Option"
            />
            <Button
              type='submit'
              text="Create New Poll"
            />
          </div>
        </form>
      );
    } else {
      initialRender = (
        <a href="">Your poll code is {this.state.shortID}</a>
      )
    }
    return (
      <div>
        {initialRender}
      </div>
    );
  }
}

NewPoll.propTypes = {
  dispatch: PropTypes.func,
};


export default connect()(NewPoll);