import React from 'react';

const PlayerDetails = (props) => {
    const playerDetails = props.playerDetails;

    return (<div>
        <div id='playerCard'>
            <div>{playerDetails.name}</div>
            <div><img id='playerImage' src={playerDetails.imageUrl}></img></div>
            <div>Breed: {playerDetails.breed}</div>
        </div>
        <button onClick={() => {
            props.setPlayerDetails({})
        }}>Go Back</button>
    </div>)

}

export default PlayerDetails;