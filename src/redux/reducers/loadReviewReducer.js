import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    loadingReview: false
}

export const loadReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADREVIEWS_SUCCESS:
            return { ...state, reviewDetails: action.reviewDetails, loadingReview: true }

        default:
            return state;
    }
}