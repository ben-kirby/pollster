/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { v4 } from 'uuid';
import shortid from 'shortid';
import { addPoll } from './../actions';
import { connect } from 'react-redux';

import InputField from './Reusable/InputField';
import Button from './Reusable/Button';

class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollName: '',
      options: ['', ''],
    };
    this.generateShortID = this.generateShortID.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateShortID(){
    return shortid.generate();
  }

  handleAddOption() {
    let newOptions = this.state.options;
    newOptions.push(this.state.options.length);
    this.setState({ options: newOptions });
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;
    let newOptions = [];
    for (let index = 0; index < this.state.options.length; index++) {
      newOptions.push(document.getElementById(index).value);
    }



    let newPollInfo = {
      name: e.target.name.value,
      options: newOptions,
      id: shortid.generate()
    };
    console.log(newPollInfo);

    dispatch(addPoll(newPollInfo));
    
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default connect()(NewPoll);