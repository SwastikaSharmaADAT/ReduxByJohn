import React from 'react'
import Form from './SearchForm'
import MovieList from './MovieList';
import Navbar from './Navbar';

const Home = () => {
    return (
      
      <main>
        <Navbar />
        <Form /> 
        <MovieList />
      </main>
    ) ;
  }

  export default Home ;
