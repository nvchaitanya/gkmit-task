import {FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from './Action'

const initState={
    data:[],
    isLoading:false,
    isError:false,
    isData:false,
}

export const reducer = (state = initState,{ type,payload }) => {
    switch(type){

        case FETCH_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
                isData:false
            }

        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isData:true,
            }

        case FETCH_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
                isData:false
            }
            
        default:
            return state
    }
}