import React from 'react';

const SearchPuppies = (props) => {
    const setSearchPlayers = props.setSearchPlayers;

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                setSearchPlayers(event.target[0].value);
            }}>
                <input placeholder='Search player...' type='search'></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchPuppies;