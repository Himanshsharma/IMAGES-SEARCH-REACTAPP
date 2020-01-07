import React, { Component } from 'react';
class Search extends Component {
    state = { in:'' }
submit=(event)=>{
    event.preventDefault()
    this.props.onsub(this.state.in)
}
    render() { 
        return ( <div><form onSubmit={this.submit}><input onChange={e=>{this.setState({in:e.target.value})}} /></form></div> );
    }
}
 
export default Search;