import React from 'react';
import styled from 'styled-components';

const styles = {
  PollForm: styled.form`
    display: flex;
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
};

function PollSearchForm(props) {
  return (
    <div>
      <styles.PollForm onSubmit={props.onSubmit}>
        <styles.PollInput id='pollID' type="text" placeholder="Enter Poll Code" />
      </styles.PollForm>
    </div>
  );
}


export default PollSearchForm;