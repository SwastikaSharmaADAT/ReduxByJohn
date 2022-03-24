import React from 'react'
import Form from './SearchForm'
import MovieList from './MovieList';
import {connect} from 'react-redux';

const Home = () => {
    return (
      
      <main>
        <Form /> 
        <MovieList />
      </main>
    ) ;
  }

  export default Home ;
