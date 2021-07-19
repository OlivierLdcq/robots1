import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search/Search'
import Display from './Components/Display/Display'
class App extends Component{
  constructor(){
    super();
    this.state={
      search : "",
      userList : []
    }
  }

  onSearchChange =(e)=>{
      this.setState({search : e.target.value});
      console.log(this.state.search);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
      return response.json().then(users=>{
        return this.setState({userList : users});
      })
    })
  }

  render(){
    const filteredList = this.state.userList.filter(item=>{
      return item.name.toLowerCase().includes(this.state.search.toLowerCase());
    })

    return(<div className="App">
        <Search search={this.state.search} value={this.state.search} onSearchChange={this.onSearchChange} />
        <Display userList={filteredList}/>
    </div>)
  }
}

export default App;