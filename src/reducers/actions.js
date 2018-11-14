import * as actionTypes from './actionTypes';

export const getPeopleByName = (name) => dispatch => {
    dispatch({type: actionTypes.PENDING})
    fetch('https://swapi.co/api/people/?search=' + name)
    .then(response => response.json())
    .then(response => dispatch({type: actionTypes.GET_PERSON_SUCCESS, payload: response.results[0]}))
    .catch(error => dispatch({type: actionTypes.GET_PERSON_FAILED, payload: error}))
}

export const getAllPeople = () => dispatch => {
    dispatch({type: actionTypes.PENDING})
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(response => dispatch({type: actionTypes.GET_PEOPLE_SUCCESS, payload: response.results}))
    .catch(error => dispatch({type: actionTypes.GET_PEOPLE_FAILED, payload: error}))
}

export const getAllStarships = () => dispatch => {
    dispatch({type: actionTypes.PENDING})
    fetch('https://swapi.co/api/starships')
    .then(response => response.json())
    .then(response => dispatch({type: actionTypes.GET_STARSHIPS_SUCCESS, payload: response.results}))
    .catch(error => dispatch({type: actionTypes.GET_STARSHIPS_FAILED, payload: error}))
}