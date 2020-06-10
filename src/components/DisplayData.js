import React from 'react'
import { connect } from 'react-redux'

export class DisplayData extends React.Component{
    render(){
        
        return(
            <div className='container'>
                {this.props.isData && this.props.data.length>0 ? 
                    <div>
                        <h3 className='text-right'>total : {this.props.data.length}</h3>
                        {this.props.data.map(element => 
                            <div className='col-md-12 border rounded my-2' key={element.id}>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img src={element.media.image_url} alt="" height="150px"/>
                                    </div>
                                    <div className='col-md-9'>
                                        <h3><strong><u>{element.title}</u></strong></h3>
                                        <h4>{element.description}</h4>
                                        <h5>{element.occurred_at}{element.updated_at}{element.location_description}</h5>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data:state.data,
    isData:state.isData
})
//  const mapDispatchToProps = dispatch => ({

//  })

 export default connect(mapStateToProps,null)(DisplayData)