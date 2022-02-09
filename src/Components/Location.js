import React, { Component } from 'react';
import Hemisphere from '../Components/Hemisphere'
import './Hemisphere.css'

export default class Location extends Component {

        state={
            latitude:100,
            error:''
        }
        componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
              (position)=>
              {
                this.setState({latitude:position.coords.latitude})
              },
                (error)=>this.setState({error:error.message})
                );
           } 
    


    render(){
            if(this.state.error===''){
                return(
                <div>
                    <Hemisphere latitude={this.state.latitude}></Hemisphere>
                </div>
                )
            }else{
                return(
                <div>
                    <label>Error: {this.state.error}</label>
                </div>
                )

            }
        }
}
