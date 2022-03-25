import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios' ;
import {useEffect} from 'react' ;
import { SET_ISLOADING_STAUS,UPDATE_MOVIES_ARRAY,SET_ERROR_STATUS } from './Actions';
import Movie from './Movie';
export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY ;
export const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
const DEFAULT_API_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


const Loading = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: var(--clr-primary-5);
  animation: spinner 0.6s linear infinite;
`;

const Movies = styled.section`
  margin: 0 auto;
  width: 90vw;
  max-width: var(--max-width);
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 3rem;
`;




function MovieList({movies, isLoading, query,url,dispatch}){

  const fetchMovies = async (url)=>{
    dispatch ({type:SET_ISLOADING_STAUS, payload:{status:true}}) ;
    try{
      const response = await axios(url) ;
      const data = await response.data;
      
      await dispatch({type:UPDATE_MOVIES_ARRAY, payload:{movies:data.results}}) ;
      await dispatch({type:SET_ERROR_STATUS, payload:{error:{show: false, msg: ''}}}) ;
      await dispatch ({type:SET_ISLOADING_STAUS, payload:{status:false}}) ;
    }catch(error){
      dispatch ({type:SET_ISLOADING_STAUS, payload:{status:false}}) ;
      dispatch({type:UPDATE_MOVIES_ARRAY, payload:{movies:[]}}) ;
      console.log (error) ;
      dispatch({type:SET_ERROR_STATUS, payload:{error:{show: true, msg: '`${error}`'}}}) ;
    }
  }

  useEffect(() =>{
    if (query === ''){
      fetchMovies(DEFAULT_API_ENDPOINT);

    }else{
      fetchMovies(`${API_ENDPOINT}&query=${query}`) ;
    }
  },[query]) ;
    
    if (isLoading){
        return <Loading/>;
    }

  if (movies){
        return (
        
          <section className='movies'>
          {
              movies.map((movie)=>{
              
                const {id, original_title:title,release_date:date, backdrop_path:poster} = movie ;
                const BASEURL = 'https://image.tmdb.org/t/p/';
                const SIZE = 'original/';
        
                const imagePath = BASEURL + SIZE + poster ;
              
                return(<Movie 
                  id={id} 
                  title={title} 
                  date={date} 
                  src={imagePath} 
                  poster={poster}
                  url={url} />) 
              })}
              </section>
            
        ) ;
  }else{
    return null ;
  }
}


function mapStateToProps(store){
    const {movies,query, isLoading, url} = store ;
    return {movies,query, isLoading, url };
}
export default connect(mapStateToProps)(MovieList) ;
 

