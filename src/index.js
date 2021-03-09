import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movie from './Movie';
import reportWebVitals from './reportWebVitals';


const lOTRs= {
  titles: [
    "The Fellowship of the Ring",
    "The Two Towers",
    "The Return of the King"
  ],

  hours: [
    "2",
    "2",
    "3"
  ],
  minutes: [
    "58",
    "59",
    "21"
  ]
}


ReactDOM.render(
  <React.StrictMode>
    <Movie 
      titles={lOTRs.titles}
      hours={lOTRs.hours}
      minutes={lOTRs.minutes}
    
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
