import * as actionTypes from '../../actions/actionTypes'
import * as config from '../../config'

const initialState = {
    loading: true,
    error: ''
}

const generateSelectOptions = () => {
    let genreFilter = [];
    for (var key in config.GENRES) {
        genreFilter.push({
            'label': config.GENRES_VALUES[key],
            'value': config.GENRES[key]
        })
    }

    return {
        genreFilter: genreFilter
    }
}


// Returning the store values to the connected component
export const loadReviewPublicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADGENRESELECTLIST_SUCCESS:
            const selectOptions = generateSelectOptions()
            return { ...state, loading: false, topReviewedBooksDetails: action.topReviewedBooksDetails, genreFilter: selectOptions.genreFilter }

        case actionTypes.LOADGENRESELECTLIST_ERROR:
            return { ...state, loading: false, error: action.error }

        case actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_SUCCESS:
            return { ...state, topReviewedBooksDetails: action.topReviewedBooksDetails, loading: false }

        case actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_ERROR:
            return { ...state, error: action.error, loading: false }

        default:
            return state;
    }
}