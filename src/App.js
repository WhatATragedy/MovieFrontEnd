import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Display from './components/Display';

function App() {
  const [genreData, setGenreData] = React.useState([])
  
  const searchGenre = text => {
    axios.get("http://localhost:5000/reviews/genres/" + text)
    .then((response) => {
      console.log(response.data)
      setGenreData(response.data)

    });
  }
  return (
    <div className="App">
      <div className="app__header">
        <Search searchGenre={searchGenre}/>
      </div>
      <Display genreData={genreData} />
    </div>
  );
}

export default App;
