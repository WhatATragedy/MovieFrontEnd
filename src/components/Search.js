import React, { useState, useEffect } from "react";
/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import './Search.css';

function Search( {searchGenre}) {
    const [searchVal, setSearchVal] = useState("Western")
    const [genreList, setGenreList] = useState(["Action", "Horror", "Western"])
    const [selectedDate, setSelectedDate] = useState(new Date('1990-01-1T12:00:00'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!searchVal) return;
        // searchGenre(searchVal);
    }

    useEffect(() => {
        const getGenres = async () => {
          fetch("http://127.0.0.1:5000/movies/genres")
            .then((response) => response.json())
            .then((data) => {
                setGenreList(data);
            });
        };

        getGenres();
      }, []);
    return (
        <div className="app__search">
            <div className="search__filters">
                <Autocomplete
                    className="search__genre"
                    id="combo-box-demo"
                    options={genreList}
                    value={searchVal}
                    onChange={(event, newValue) => {
                        setSearchVal(newValue);
                    }}
                    // getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie Genre" variant="outlined" />}
                />
                <div> 
                    <Datetime 
                        className="search__datepicker"
                        value={selectedDate}
                        initialValue={selectedDate}
                        dateFormat="YYYY" 
                        timeFormat={false}
                        initialViewMode='years'
                        onChange={handleDateChange}
                        input={false}
                    />
                    <div> Select for films after a certain date.. </div> 
                </div>
            </div>
            <div className="search__button_div">
            <Button 
                className="search__button"
                variant="contained"
                onClick={() => {searchGenre(searchVal, selectedDate)}}
            >
                Search!
            </Button>
            </div>
        </div>
    )
}

export default Search