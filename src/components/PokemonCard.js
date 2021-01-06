import React from 'react';
import { PokemonData } from './PokemonData';

export const PokemonCard = (props) => {

    const {pokemon} = props;
    const {entry_number, pokemon_species} = pokemon;
    const {name} = pokemon_species;

    return (

        <div>
            <PokemonData number = {entry_number} name = {name} />
            <div>
                <img src = {`https://pokeres.bastionbot.org/images/pokemon/${entry_number}.png`} alt = {name} />
            </div>
        </div>
    )

}