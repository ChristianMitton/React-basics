import React from 'react';

const Stats = (props) => {

    const totalPlayers = props.players.length;
    // reduce will be executed on each item in the array:
    // ! TODO: look more into how reduce works
    // two parameters:
        // 1. accumulater, which adds up the return values
        // 2. current item being processed in the array
    const totalPoints = props.players.reduce((total, player) => {
        return total + player.score;
    // the '0' below is the accumulator    
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;


// reduce is useful when you are iteration, and you want a value to return instead of an array