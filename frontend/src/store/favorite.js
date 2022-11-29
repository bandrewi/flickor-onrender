import { csrfFetch } from "./csrf"

//implement a fetch all favorites later on

const FETCH = 'favorites/FETCH'
const ADD = 'favorite/ADD'
const DELETE = 'favorite/DELETE'


const fetchFavorites = (favorites) => ({
    type: FETCH,
    favorites
})

const favorite = (favorite) => ({
    type: ADD,
    favorite
})

const deleteFavorite = (id) => ({
    type: DELETE,
    id
})

export const getFavorites = () => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites`)
    const favorites = await res.json()
    dispatch(fetchFavorites(favorites))
    return favorite;
}// check to see if return gives a value 


export const addFavorite = (photoId) => async (dispatch) => {
    const res = await csrfFetch('/api/favorites/new', {
        method: 'POST',
        body: JSON.stringify({ photoId })
    })
    const newFavorite = await res.json()
    dispatch(favorite(newFavorite))
    return newFavorite;
}

export const removeFavorite = (favoriteId) => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites/${favoriteId}/delete`, {
        method: 'DELETE'
    })
    dispatch(deleteFavorite(favoriteId))
}

const initializedState = {}

export default function favoriteReducer(state = initializedState, action) {
    let newState;
    switch (action.type) {
        case FETCH:
            newState = { ...state } //can make copy of empty obj
            action.favorites.forEach(favorite => newState[favorite.id] = favorite)
            return newState
        case ADD:
            newState = { ...state }
            newState[action.favorite.id] = action.favorite
            return newState
        case DELETE:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state
    }
}