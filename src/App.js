import './App.css';
import React, { useState } from "react";
import axios from 'axios';
import Display from './components/Display';
import {sortData} from './utils/utils'

import Search from './components/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavBar from './components/NavBar';

function App() {
  const [genreSearchData, setGenreSearchData] = useState([])
  const [searched, setSearched] = useState(false)

  
  const searchGenre = (genre, date) => {
    axios({
      method: 'post',
      url: "https://dapgjaafaa.execute-api.eu-west-2.amazonaws.com/beta/movies/genres/search/" + genre, 
      data: {
        "date": date
      }
    })
    .then((response) => {
      const sortedData = sortData(response.data)
      console.log(sortedData)
      setGenreSearchData(sortedData)
      setSearched(true)
    });
  }

  if (genreSearchData.length === 0 && !searched){
    return (
      <div className="App">
        <NavBar className="nav"/>
        <div className="app__header_not_searched">
          <Search searchGenre={searchGenre} />
        </div>
      </div>
    )
  } else if (genreSearchData.length === 0 && searched){
    return (
      <div className="App">
        <NavBar className="nav"/>
        <div className="app__header_not_searched">
          <Search searchGenre={searchGenre} />
        </div>
        <p> Apologies, We have no results...</p>
      </div>
    )
  }
  return (
    <div className="App">
      <NavBar/>
      <ArrowBackIcon className="app__backarrow" fontSize="large" onClick={() => setGenreSearchData([])}/>
      <Display genreData={genreSearchData} />
    </div>
  );
}

export default App;
