import React from 'react'
import {connect} from 'react-redux'
import { fetchData } from './Redux/Action'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'
import DisplayData from './components/DisplayData'
import EmptyState from './components/EmptyState'

export class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:'',
            fromDate:'',
            toDate:''
        }
    }

    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick=() => {
        let searchObj={
            descrtption:this.state.description,
            toDate:(new Date(this.state.toDate).getTime()/1000),
            fromDate:(new Date(this.state.fromDate).getTime()/1000),
        }
        this.props.fetchData(searchObj)
    }

    render(){
        return(
            <div className='container'>
                <div className='d-flex my-3'>
                    <div className='col-10 col-md-6 col-lg-3'>
                        <input type="text" className='form-control' name='description' vaalue={this.state.description} onChange={this.handleChange} placeholder='Search case description'/>
                    </div>
                    <div className='col-10 col-md-6 col-lg-3'>
                        <input type="date" className='form-control' name='fromDate' value={this.state.fromDate} onChange={this.handleChange}/>
                    </div>
                    <div className='col-10 col-md-6 col-lg-3'>
                        <input type="date" className='form-control' name='toDate' value={this.state.toDate} onChange={this.handleChange}/>
                    </div>
                    <button className='btn btn-primary' onClick={this.handleClick}>Find Cases</button>
                </div>
                <LoadingState />
                <ErrorState />
                <EmptyState />
                <DisplayData />
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     data:state.data,
// }) 

const mapDispatchToProps = dispatch => ({
    fetchData:(payload) => dispatch(fetchData(payload))
})
export default connect(null,mapDispatchToProps)(App)