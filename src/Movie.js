import React, { Component } from 'react';

// this.props.movie = { subtitle: string, runtime: {hours: int, minutes: int} }

class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        <h2>Lord of the Rings: {this.props.movie.subtitle}</h2>
        <p>{this.props.movie.runtime.hours}hrs {this.props.movie.runtime.minutes}min</p>
      </div>
    );
  }
}

export default Movie;
