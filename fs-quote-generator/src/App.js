import React from 'react';
import axios from 'axios';

import './App.css';

//App is a class-based component, which is the main component in React
class App extends React.Component {

  //State is like a global object
  state = { advice:''};

  /* Using this method to execute the React code when the componenet 
  is already loaded in the DOM */
  componentDidMount(){
    this.fetchAdvice();
  }

  // Uses axios to make an http request to the browser to get the API
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      //
      const { advice } = response.data.slip;
      this.setState({advice});
    }).catch((error) => {
      console.log(error);
    })
  }

  render(){
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="title">Random Quote Generator</h1>
          <h1 className="heading">
            {this.state.advice}
          </h1>
          <button className="button" onClick = {this.fetchAdvice}>
            <span>
              Give Me Advice
            </span>
          </button>
        </div>
        <footer id="footer">
            <p >&copy; Copyright 2022 <br />
            Built with &#x2661; by  
            <a href="https://github.com/makaylacodes/fs-quote-generator" target="_blank">
             Makayla Anderson-Tucker
        </a>
        </p>
        </footer>
      </div>
    );
  }
}

export default App;
