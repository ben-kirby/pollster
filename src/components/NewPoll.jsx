/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { v4 } from 'uuid';
import shortid from 'shortid'

import InputField from './Reusable/InputField';
import Button from './Reusable/Button'

class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollName: '',
      options: ['', ''],
    };
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateShortID = this.generateShortID.bind(this);
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
    let newName = e.target.name.value;
    let newOptions = [];
    for (let index = 0; index < this.state.options.length; index++) {
      newOptions.push(document.getElementById(index).value)
    }
    this.setState({
      pollName: newName,
      options: newOptions
    });

    let id = shortid.generate()
    console.log(id)    
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

export default NewPoll;