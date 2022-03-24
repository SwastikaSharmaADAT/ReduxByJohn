import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const LinkToMovie = styled(Link)`
  .movie {
    position: relative;
    overflow: hidden;
  }
  .movie img {
    width: 100%;
    height: 400px;
    display: block;
    object-fit: cover;
  }
`;

const MovieInfo = styled.div`
  .movie-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.6);
    transform: translateY(100%);
    transition: var(--transition);
  }
  .movie-info h4 {
    color: var(--clr-white);
    margin-bottom: 0.25rem;
  }
  .movie-info p {
    margin-bottom: 0;
    color: var(--clr-white);
  }
  .movie:hover .movie-info {
    transform: translateY(0);
  }
  @media screen and (min-width: 576px) {
    .movies {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }

`;




function Movie ({id,title, date, src, poster,url }){
    return(
 
    <Link to={`/movies/${id}`} key={id} className='movie'>
        <article>
            <img src={poster === null ? url : src} alt={title} />
            <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{date}</p>
            </div>
        </article>
    </Link>
    
    );
}


export default  Movie ;
