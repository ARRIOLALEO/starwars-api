import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      loading: false,
      data: {} 
    };
  }
  async componentDidMount(){
    this.setState({loading: true})
    const response = await fetch(`https://swapi.dev/api/people/1`);
    const json = await response.json();
    this.setState({loading:false,
       data: json });
  }

    render(){
      const name = this.state.loading?<h1>it is loading</h1>:<h1>{this.state.data.name}</h1>
      return (
        <div className="App">
          {name}
        </div>
      );
  }
}

export default App;
