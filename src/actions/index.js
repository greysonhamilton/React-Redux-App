import axios from 'axios';

export const FETCH_DATA_START = 'Fetch_Data_Start';
export const FETCH_DATA_SUCCESS = 'Fetch_Data_Success';
export const FETCH_DATA_FAILURE = 'Fetch_Data_Failure';

export const fetchPokemon = () => {

    return dispatch => {
        dispatch ({type: FETCH_DATA_START});

        axios.get('https//pokeapi.co/api/v2/pokedex/kanto')
        .then ((res) => {
            dispatch ({
                type: FETCH_DATA_SUCCESS,
                payload: res.data.pokemon_entries
            })

        })
        .catch((err) => {
            dispatch ({
                type: FETCH_DATA_FAILURE,
                payload: err.message
            })

        })

    }

}

export const FETCH_TYPES_START = 'FETCH_TYPES_START';
export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_FAILURE = 'FETCH_TYPES_FAILURE';

export const fetchTypes = (pokeId) => async dispatch => {
    dispatch ({
        type: FETCH_TYPES_START
    });

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((res) => {
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data.types
        })

    })
    .catch((err) => {
        dispatch ({
            type: FETCH_TYPES_FAILURE,
            payload: err.message
        })

    })
    
}