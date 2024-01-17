import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/search.css"

const Search = () => {
    return (
        <center>
            <div class="input-box container">
                <input name='search' type="search" placeholder="Search here..." aria-label="Search" />
                <Link className='button' type="button" style={{ textDecoration: "none" }}>Search</Link>
            </div>
        </center>
    )
}

export default Search
