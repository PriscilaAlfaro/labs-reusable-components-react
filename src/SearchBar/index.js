import React, {useState} from 'react';
import './searchBar.css';


const SearchBar = ({ primaryColor, secondaryColor}) => {
const [search, setSearch]= useState("");

    const onChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue)
    }

    return (
        <>
        <div className="searchBar-container">
            <i className="fas fa-search" style={{ color: secondaryColor }}></i>
            <input
                className="searchBar-input"
                placeholder="type something..."
                type="text"
                onChange={onChange}
                value={search}
                style={{ background: primaryColor }}
            />
                <button onClick={console.log('searching')} className="searchBar-button" style={{ background: secondaryColor}}>find</button>
        </div>
         <div className="searchBar-output">Search output: {search}</div>
         </>
    );
}

export default SearchBar;
