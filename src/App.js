import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  
  render() {
    const movies = [{
      subtitle: "The Fellowship of the Rings",
      runtime: {
        hours: 2,
        minutes: 58
      }
    }, {
      subtitle: "The Two Towers",
      runtime: {
        hours: 2,
        minutes: 59
      }
    }, {
      subtitle: "The Return of the King",
      runtime: {
        hours: 3,
        minutes: 21
      }
    }];
  
    const movieComponents = movies.map(movie => {
      return <Movie movie={movie} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {movieComponents}
          {/* <Movie movie={movies[0]} />
          <Movie movie={movies[1]} />
          <Movie movie={movies[2]} /> */}
        </header>
      </div>
    );
  }
}

export default App;
