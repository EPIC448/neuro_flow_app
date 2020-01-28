import React, { Component } from 'react';
import Data from '../data/data.json'

// class Urls extends React.Component {
    
//     state = {
//         url: "",
//     }

//     isURL(str) {
//         var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
//             '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
//             '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//             '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//             '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//             '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
//         // return pattern.test(str);
//     }
    

     
//     handleClick(e) {
        
//         e.preventDefault();

//   console.log("Urls are working ")
//         const audioUrls = Data.map((dataItem) =>
//             //  dataItem.url is a array of URLS.
//             // Make component where each URL can handle it own audio.. and Parse the file to check if playable.
//             // Add it to your compeonent.s 
//             // this.isURL(dataItem.url) ? `${dataItem.url}` : "Choose another Audio" 
//             dataItem.url.forEach(function(eachUrl){
                
//               this.setState.push(eachUrl === this.isURL(eachUrl) ? `<a href=${eachUrl}</a>` : "audio is False")
              
//             })
//         )
//         return audioUrls
//     }
 

    

//     render() {
//         return (
//             <div className="Urls">
              
//                 {Data.map(data =>
//                     <li key={data.id}>
//                         data.forEach( function(single))
//                         <a href={X} onClick={this.handleClick}>Click here to play audio</a>
            
//                     </li>
            
//                 )}
              
//                 {this.state.url}
          
        
//             </div>
      
//         )
//     }

// }
    
//     export default Urls;
    