import React from "react";
import "./Search.css";

const searchList = [
    "Agnes Slezsak",
    "Ilker Satmaz",
    "Jerzy Rojek",
    "Nadzeya Molchan",
    "Roberto Payeras Amezcua",
    "Sandor Schwarz",
    "Tivadar Lisch"
  ];

function Search(){
    const [searchKey, setSearchKey] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(searchList);
    
    const searchMovie = () => {
        const results = searchList.filter(item =>
            item.toLowerCase().includes(searchKey.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className="search-div">
            <div>
                <input
                className="search-input"
                    type="text"
                    placeholder="Search from the below list"
                    value={searchKey}
                    onChange={(event)=>{setSearchKey(event.target.value)}}
                />
                <button className="search-btn" onClick={searchMovie}>SEARCH</button>
            </div>            
            <ul>
                {searchResults.map(item => (
                    <li className="list-item" key={item}>{item}</li>
                ))}
            </ul>
        </div>        
    )
}

export default Search