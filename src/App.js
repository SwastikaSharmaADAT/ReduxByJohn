import React from "react";
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/reducer';


import Home from './components/Home';
import Movie from './components/SingleMovie';

import {BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';

function App() {

  const initialStore = {
    movies:[],
    movie:{},
    isLoading: false,
    query:'',
    error:{
        status:false,
        msg:''
    },
    url :'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
  }
  
  const store = createStore(reducer, initialStore) ;
  
  return (
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/movies/:id' element={<Movie/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
