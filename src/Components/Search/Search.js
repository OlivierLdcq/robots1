import React, { Component } from 'react';
import "./Search.css"

class Search extends Component{
    render(){
        return(<div >
            <h1 style={{marginTop : "0px"}}>Robots List</h1>
            <input type="text" value={this.props.value} onChange={this.props.onSearchChange}/>
        </div>)
    }
}
export default Search;