import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    loading: false
}

export const loadReviewPublicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADGENRESELECTLIST_SUCCESS:
            return { ...state, loading: true, topReviewedBooksDetails: action.topReviewedBooksDetails }

        case actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_SUCCESS:
            return { ...state, data: action.data}

        default:
            return state;
    }
}