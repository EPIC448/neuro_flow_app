import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Data from '../data/data.json'
import ReadMoreReact from 'read-more-react';
import validator from 'validator'



    
class PlayList extends React.Component {
    
    state = {
    
        error: null
    }

     
    handleClick(event) {
        
    //     e.preventDefault();
    //     // console.log(e.dispatchConfig)
    //     //   debugger
    //     console.log(e)
        
         
    this.setState({
        [event.target.name]: event.target.value,
    })
        
    
        
}

validate(values) {
    const errors = {};
      
    if (!validator.isURL(values.hyperlink)) {
        errors.hyperlink = 'This field can not be link'
    }
      
    return errors
}
    
    render() {
    
       
        return (

            <div>
                <h1>List of all the Information </h1>
 
 

         <div class= "nested-links"> 
                    {Data.map(data => (
                        <li key={data.id}>
                            
                            <h1>{data.label}</h1>
                            <h2>{data.category}</h2>

                            {/* <h2>{data.url}</h2> */}
                            {/* < Urls /> */}

                  <a href={data.url} value={data.url}  name="urlContent" onClick ={this.handleClick}>Click here to play audio</a>
                
                            <h2>{data.speaker}</h2> 
            
                            <ReadMoreReact text={data.description} min={70} ideal={95}
                                max={200}
                                readMoreText={"Click here to Read More "}/>
                        </li>

                     ))
              }
          </div>


             
            </div>
            
        
        )
        

    }
}

export default PlayList


