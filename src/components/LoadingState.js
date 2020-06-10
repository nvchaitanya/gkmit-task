import React from 'react'
import { connect } from 'react-redux'

export class LoadingState extends React.Component{
    render(){
        return(
            <div>
                {this.props.isLoading ? "Loading..." : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading:state.isLoading
})

export default connect(mapStateToProps,null)(LoadingState)