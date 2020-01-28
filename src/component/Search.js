import SearchField from 'react-search-field';
import React, { Component } from 'react';
import Data from '../data/data.json';
import ReadMoreReact from 'read-more-react';



    
class Search extends React.Component {

    state = {
        search: " ",
     
    };
    
    
  

    onChange = e =>{
        this.setState({ search: e.target.value });
        
    }

    render() {

        const { search } = this.state;
        
        const filteredCategory = Data.filter( data =>{
            return data.category.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })
        console.log(filteredCategory)
        return (


            <div>
                <h1>Search List of category </h1>
               

                <input type='text' placeholder='Search' value={this.state.search} name="Search" onChange={this.onChange}/><br/>

           
                
                <section>

                    {filteredCategory.map(typedCategory => (
                        <React.Fragment key={typedCategory.id}>
                            
                            <h2>{typedCategory.category}</h2>
                            <h2>{typedCategory.url}</h2>

                            <h2>{typedCategory.speaker}</h2>
                     
                            <ReadMoreReact text={typedCategory.description} min={70} ideal={95}
                                max={200}
                                readMoreText={"Click here to Read More "}/>
                          

                        </React.Fragment>



                    ))}
                </section>

            </div>
            
        
        )
        

    }
}

export default Search


