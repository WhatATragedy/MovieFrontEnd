import React, { useState, useEffect } from "react";
import Display from "./Display";

function Search( {searchGenre}) {
    const [searchVal, setSearchVal] = React.useState("Western")
    const handleSubmit = e => {
        e.preventDefault();
        if (!searchVal) return;
        searchGenre(searchVal);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="search__form">
                <input type="text" className="" value={searchVal} onChange={e => setSearchVal(e.target.value)}>
                </input>
            </form>
        </div>
    )
}

export default Search