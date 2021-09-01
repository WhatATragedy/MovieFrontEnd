import React, { useState, useEffect } from "react";
/* eslint-disable no-use-before-define */

import "react-datetime/css/react-datetime.css";
import './Search.css';
import SearchBar from "./SearchBar";
import DateRangeIcon from '@material-ui/icons/DateRange';
import Datetime from 'react-datetime';
import { Button } from "@material-ui/core";

function Search( {searchGenre}) {
    const [searchVal, setSearchVal] = useState()
    const [selectedDate, setSelectedDate] = useState();
    const [availableGenres, setAvailableGenres] = useState([])
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleDateChange = (date) => {
              setSelectedDate(date);
              setShowDatePicker(!showDatePicker);
    };

    useEffect(() => {
        const getGenres = async () => {
          fetch("https://dapgjaafaa.execute-api.eu-west-2.amazonaws.com/beta/movies/genres")
            .then((response) => response.json())
            .then((data) => {
              setAvailableGenres(data);
            });
        };
    
        getGenres();
      }, []);
    
        return (
        <div className="app__search">
            <SearchBar className="search__bar" placeholder="Search For a Movie Genre..." data={availableGenres} setSearchValue={setSearchVal} />
            <p className="search_filter">Filter for Movies made after a certain date</p>
            <div className="search_datepicker_toggle" onClick = {() => setShowDatePicker(!showDatePicker)}>
                
                <DateRangeIcon fontSize="large"/>
            </div>
            {showDatePicker &&
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

            }
            <Button variant="contained" onClick={() => searchGenre(searchVal, selectedDate)}>Find Me Some Movies</Button>
            
        </div>
        // implement this at some point https://next.material-ui.com/components/date-picker/ 
    //     <DatePicker
    //     views={['year']}
    //     label="Year only"
    //     value={value}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} helperText={null} />}
    //   />
        
    )
}

export default Search


//     const handleDateChange = (date) => {
//       setSelectedDate(date);
//     };

//     // const handleSubmit = e => {
//     //     e.preventDefault();
//     //     if (!searchVal) return;
//     //     // searchGenre(searchVal);
//     // }

//     useEffect(() => {
//         const getGenres = async () => {
//           fetch("http://127.0.0.1:5000/movies/genres")
//             .then((response) => response.json())
//             .then((data) => {
//                 setGenreList(data);
//             });
//         };

//         getGenres();
//       }, []);
//     return (
//         <div className="app__search">
//             <div className="search__filters">
//                 <Autocomplete
//                     className="search__genre"
//                     id="combo-box-demo"
//                     options={genreList}
//                     value={searchVal}
//                     onChange={(event, newValue) => {
//                         setSearchVal(newValue);
//                     }}
//                     // getOptionLabel={(option) => option.title}
//                     style={{ width: 300 }}
//                     renderInput={(params) => <TextField {...params} label="Movie Genre" variant="outlined" />}
//                 />
//                 <div> 
//                     <Datetime 
//                         className="search__datepicker"
//                         value={selectedDate}
//                         initialValue={selectedDate}
//                         dateFormat="YYYY" 
//                         timeFormat={false}
//                         initialViewMode='years'
//                         onChange={handleDateChange}
//                         input={false}
//                     />
//                     <div> Select for films after a certain date.. </div> 
//                 </div>
//             </div>
//             <div className="search__button_div">
//             <Button 
//                 className="search__button"
//                 variant="contained"
//                 onClick={() => {searchGenre(searchVal, selectedDate)}}
//             >
//                 Search!
//             </Button>
//             </div>
//         </div>
//     )
// }

// export default Search