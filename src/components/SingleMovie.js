import React, { useEffect } from 'react' ;
import axios from 'axios';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom' ;
import { connect } from 'react-redux';
import { API_KEY } from './MovieList';
import { SET_ISLOADING_STAUS, UPDATE_SINGLE_MOVIES_ARRAY, SET_ERROR_STATUS } from './Actions';

function SingleMovie ({movie,isLoading,error,dispatch}) {
    const { id } = useParams() ;
    console.log (id) ;


    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    const fetchMovies = async (url)=>{
      dispatch ({type:SET_ISLOADING_STAUS, payload:{status:true}}) ;
      try{
        const response = await axios(url) ;
        const data = await response.data;
        console.log (data) ;
        await dispatch({type:UPDATE_SINGLE_MOVIES_ARRAY, payload:{data}}) ;
        await dispatch({type:SET_ERROR_STATUS, payload:{error:{show: false, msg: ''}}}) ;
        await dispatch ({type:SET_ISLOADING_STAUS, payload:{status:false}}) ;
      }catch(error){
        dispatch ({type:SET_ISLOADING_STAUS, payload:{status:false}}) ;
        dispatch({type:UPDATE_SINGLE_MOVIES_ARRAY, payload:{movies:[]}}) ;
        console.log (error) ;
        dispatch({type:SET_ERROR_STATUS, payload:{error:{show: true, msg: '`${error}`'}}}) ;
      }
    }
    
    useEffect(()=>{
      fetchMovies(url) ;
    },[id]) 
    
      if (isLoading) {
        return <div className='loading'></div>
      }
      if (error.show) {
        return (
          <div className='page-error'>
            <h1>{error.msg}</h1>
            <Link to='/' className='btn'>
              back to movies
            </Link>
          </div>
        )
      }
      
      const BASEURL = 'https://image.tmdb.org/t/p/';
      const SIZE = 'original/';
      const {title:title,release_date:date, poster_path:poster,overview} = movie ;
      const imagePath = BASEURL + SIZE + poster ;
      return (
        <section className='single-movie'>
            <img src={imagePath} alt={title} />
            <div className='single-movie-info'>
              <h2>{title}</h2>
              <p>{overview}</p>
              <h4>Relaese Date: {date}</h4>
            <Link to='/' className='btn'>
                back to movies
            </Link>
      </div>
    </section>) ;
  
}

function mapStateToProps(state){
  const {movie,isLoading,error} = state ;
  console.log (movie,isLoading,error) ;
  return {movie,isLoading,error};
}


export default connect(mapStateToProps) (SingleMovie) ;
  