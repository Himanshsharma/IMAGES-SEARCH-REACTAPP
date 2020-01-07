import React, { Component } from 'react';
import Search from './Components/search';
import axios from 'axios';
class App extends Component {
    state = {  image:[]}
    submit=async(e)=>{
      const response=await axios.get('https://api.unsplash.com//search/photos',{
  params:{query:e},
  headers:{
      Authorization:'Client-ID 349d40309449f89dcbc5942e92ea0712b7dcf8d321453d31ee7536f276afacab'
  }  
})
console.log(response)
this.setState({image:response.data.results})

    }
    render() { 
        return ( <h1>App
            
            <Search onsub={this.submit}/>
            {this.state.image.length}
            
            {this.state.image.map(img=>{return <img src={img.urls.small} />})}</h1> );
    }
}
 
export default App;