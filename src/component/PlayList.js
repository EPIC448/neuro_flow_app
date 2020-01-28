import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Data from '../data/data.json'
import ReadMoreReact from 'read-more-react';



    
class PlayList extends React.Component {
    
    state = {
        audio: "",
        error: null
    }


    isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
      }
 
    
     
    handleClick(e) {
        
        e.preventDefault();

  
        
  
    const audioUrls = Data.map((dataItem) =>
            
        //  dataItem.url is a array of URLS.
            // Make component where each URL can handle it own audio.. and Parse the file to check if playable.
            // Add it to your compeonent.s 
            // this.isURL(dataItem.url) ? `${dataItem.url}` : "Choose another Audio" 
            // console.log(dataItem.url)
            dataItem.url

          )
     
        function playable() {
            
            for (var i in audioUrls) {
             
            }
        }
        debugger
        return playable //return an array

        
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
                            <h2>{data.url}</h2>
                            {/* < Urls /> */}
                  {/* <a href={data.url} onClick ={this.handleClick}>Click here to play audio</a> */}
                  <a href={data.url} onClick ={data.url}>Click here to play audio</a>

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


