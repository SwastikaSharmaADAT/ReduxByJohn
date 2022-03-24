import React from 'react';
import {SET_QUERY_UPDATE_URL} from './Actions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const SearchDivForm = styled.form`
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 3rem;
  `;

  const FormInput = styled.input`
  width: 100%;
  border: transparent;
  max-width: 600px;
  background: var(--clr-white);
  padding: 1rem;
  font-size: 1rem;
  border-radius: var(--radius);
  color: var(--clr-grey-3);
  letter-spacing: var(--spacing);
  margin-top: 1rem;
`;

const Error = styled.div`
  color: var(--clr-red-dark);
  text-transform: capitalize;
  padding-top: 0.5rem;
  letter-spacing: var(--spacing);
  `;


const SearchForm = ({ query, error, dispatch }) => {
  
  return (
    <SearchDivForm onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <FormInput
        type='text '
        value={query}
        onChange={(e) => dispatch({type:SET_QUERY_UPDATE_URL,payload:{query:e.target.value}}) }
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </SearchDivForm>
  )
}



function mapStateToProps(state){
  const { query, error } = state ;
  return { query, error };
}
export default connect(mapStateToProps)(SearchForm);
