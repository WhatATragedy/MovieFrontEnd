import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Display from './components/Display';
import {sortData} from './utils/utils'
import SearchBar from './components/SearchBar';
import Search from './components/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  const [genreSearchData, setGenreSearchData] = useState([])
  const [availableGenres, setAvailableGenres] = useState([])
  
  const searchGenre = (genre, date) => {
    axios({
      method: 'post',
      url: "https://dapgjaafaa.execute-api.eu-west-2.amazonaws.com/beta/movies/genres/search/" + genre, 
      data: {
        "date": date
      }
    })
    .then((response) => {
      console.log(response.data)
      const sortedData = sortData(response.data)
      setGenreSearchData(sortedData)
    });
  }

  console.log("")
  if (genreSearchData.length === 0){
    return (
      <div className="App">
        <div className="app__header_not_searched">
          <Search searchGenre={searchGenre} />
        </div>
      </div>
    )

  } 
  return (
    <div className="App">
      <ArrowBackIcon fontSize="large" onClick={() => setGenreSearchData([])}/>
      <Display genreData={genreSearchData} />
    </div>
  );
}

export default App;
