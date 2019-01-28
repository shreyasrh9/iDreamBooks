import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    loadingReview: false
}

// Returning the store values to the connected component
export const loadReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADREVIEWS_SUCCESS:
            return { ...state, reviewDetails: action.reviewDetails, loadingReview: true }

        case actionTypes.LOADREVIEWS_ERROR:
            return { ...state, error: action.error, loadingReview: true }

        default:
            return state;
    }
}