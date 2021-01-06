import React from 'react';

export const PokemonData = (props) => {

    const {number, name} = props;

    return (

        <div>
            <p>
                {number}
            </p>
            <h3>
                {name}
            </h3>
        </div>
    )
}