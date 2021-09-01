import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data, dateFilter, searchGenre}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleGenreClick = (event) => {
    const searchWord = event.target.innerText;
    setWordEntered(searchWord)
    searchGenre(searchWord, dateFilter)
    setFilteredData([])

  }
  const handleFilter = (event) => {
    console.log(event)
    const searchWord = event.target.value;
    console.log(searchWord)
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        console.log(value)
        return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon className="filter__button" onClick={() => searchGenre(wordEntered, dateFilter)}/>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                <p className="data__p" onClick={(e) => handleGenreClick(e)}>{value}</p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;