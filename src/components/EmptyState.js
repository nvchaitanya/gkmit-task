import React from 'react'
import { connect } from 'react-redux'

export const EmptyState = (props) => {
    return(
        <div className='container'>
            {props.isData && props.data.length ===0 ? <h4>No Results</h4> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    data:state.data,
    isData:state.isData,
})

export default connect(mapStateToProps,null)(EmptyState)