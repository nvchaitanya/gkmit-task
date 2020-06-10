import axios from 'axios'

//actionTypes
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'


//actionCreators
export const fetchRequest = (payload) => ({
    type:FETCH_DATA_REQUEST,
    payload
})

export const fetchSuccess = (payload) => ({
    type:FETCH_DATA_SUCCESS,
    payload
})

export const fetchFailure = (payload) => ({
    type:FETCH_DATA_FAILURE,
    payload
})

export const fetchData = (query) => {
    return dispatch => {
        dispatch(fetchRequest())
        return axios
        .get(`https://bikewise.org:443/api/v2/incidents?page=1&occurred_before=${query.toDate}&occurred_after=${query.fromDate}&incident_type=theft&proximity=delhi&proximity_square=100`)
        .then(res=> {
            return dispatch(fetchSuccess(res.data.incidents))
        })
        .catch(err => dispatch(fetchFailure(err)))
    }
}