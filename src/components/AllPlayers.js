import React from 'react';

const AllPlayers = (props) => {
    const playerList = props.playerList;
    const clickPlayer = props.clickPlayer;

    return (
        <div id="playerListContainer">
            {
                playerList.map((player, index) => {
                    return (
                        <div id='playerCard' key={index}>
                            <div>{player.name}</div>
                            <div><img id='playerImage' src={player.imageUrl}></img></div>
                            <div>Breed: {player.breed}</div>
                            <div><button onClick={() => {
                                clickPlayer(player.id)
                            }}>See Details</button></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllPlayers;
