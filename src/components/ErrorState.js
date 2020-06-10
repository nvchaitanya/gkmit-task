import React from 'react'
import { connect } from 'react-redux'

export const ErrorState =(props) => {
    return(
        <div className='container'>
            {props.isError ? <div className='text-danger'>oops,something went wrong</div> : null}
        </div>
    )
} 
const mapStateToProps = state => ({
    isError:state.isError
})
export default connect(mapStateToProps,null)(ErrorState)