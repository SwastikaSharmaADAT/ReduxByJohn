import {SET_QUERY_UPDATE_URL,
        SET_ISLOADING_STAUS, 
        SET_ERROR_STATUS,
        UPDATE_MOVIES_ARRAY,
        UPDATE_SINGLE_MOVIES_ARRAY} from './Actions';

function reducer(state, action){

    switch(action.type){
        
        case SET_QUERY_UPDATE_URL:
            {
                const {query} = action.payload ;
                return {...state, query:query};
            }
        
        case UPDATE_MOVIES_ARRAY:
            {
                const {movies} = action.payload ;
                console.log (movies) ;
                return {...state, movies:movies} ;                
            }
        
        case SET_ISLOADING_STAUS:
            {
            const {status} = action.payload ;
            console.log ('I have reached loading ' +status) ;
            return {...state, isLoading:status} ;
            
            }
        case UPDATE_SINGLE_MOVIES_ARRAY:{
            const {data} = action.payload ;
            console.log (data, action) ;
            return {...state, movie:data};
        }
        case SET_ERROR_STATUS:{
            const {status, msg} = action.payload ;
            return {...state, error:{status, msg}} ;
        }
        default:
            return state ;
    }
    
}

export default reducer ;