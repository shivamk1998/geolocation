import React from "react";
import south from './south.jpg'
import north from './north.jpg'
import './Hemisphere.css'



    const Hemisphere= ({latitude})=>{
        const hemisphere= latitude>0?'You arein : Northern Hemisphere' : 'You are in : Southern Hemisphere'
        const picture = latitude>0 ? north : south
        if(picture== north){
             return(
        <div className="north">
            <div className="inner">
            <img src={picture} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div>
    )

        }
        else{
             return(
        <div className="south">
            <div className="inner">
            <img src={picture} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div>
    )
        }
   
}
export default Hemisphere