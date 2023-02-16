import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import SearchPuppies from './components/SearchPlayers';
import AllPlayers from './components/AllPlayers';
import PlayerDetails from './components/PlayerDetails';

const App = () => {
    const [ playerList, setPlayerList ] = useState([]);
    const [ searchPlayers, setSearchPlayers ] = useState('');
    const [ playerDetails, setPlayerDetails ] = useState({});

    useEffect(() => {
        const getPlayerlist = async () => {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players/');
            const results = await response.json();

            console.log(results.data.players);
            setPlayerList(results.data.players);
        }
        getPlayerlist();
    }, [])

    function filterPlayers() {
        if (!searchPlayers) {
            return playerList;
        } else {
            return playerList.filter((player) => {
                console.log(player.name);
                return player.name.toLowerCase() === searchPlayers.toLowerCase();
            })
        }
    }

    const clickPlayer = async(id) => {
        const response =  await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players/${id}`);
        const result = await response.json();
        const playerDetails = result.data.player;
        console.log(playerDetails)
        setPlayerDetails(playerDetails);
    }

    return (
        <div>
            <SearchPuppies setSearchPlayers={setSearchPlayers}/>
            {playerDetails.id ? (
                <PlayerDetails 
                    clickPlayer={clickPlayer}
                    playerDetails={playerDetails}
                    setPlayerDetails={setPlayerDetails}/>
            ) : (
            <AllPlayers 
                clickPlayer={clickPlayer}
                playerList={filterPlayers()}/>
            )}
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);