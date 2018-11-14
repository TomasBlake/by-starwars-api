import * as actionTypes from './actionTypes';

const initialState = {
    isPending: false,
    singleData: {},
    dataArray: [],               
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.PENDING):
            return Object.assign({}, state, {isPending: true});
        case (actionTypes.GET_PERSON_SUCCESS):
        console.log('[reducer]', action.payload)
            return Object.assign({}, state, {singleData: action.payload, isPending: false});
        case (actionTypes.GET_PERSON_FAILED):
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case (actionTypes.GET_PEOPLE_SUCCESS):
            return Object.assign({}, state, {dataArray: action.payload, isPending: false});
        case (actionTypes.GET_PEOPLE_FAILED):
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case (actionTypes.GET_STARSHIPS_SUCCESS):
            return Object.assign({}, state, {dataArray: action.payload, isPending: false});
        case (actionTypes.GET_STARSHIPS_FAILED):
            return Object.assign({}, state, {error: action.payload, isPending: false});
            default:
            return state;
    }
}

export default reducer;