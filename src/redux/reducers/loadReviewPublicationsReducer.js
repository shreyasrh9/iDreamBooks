import * as actionTypes from '../../actions/actionTypes'
import * as config from '../../config'

const initialState = {
    loading: false
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

export const loadReviewPublicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADGENRESELECTLIST_SUCCESS:
            const selectOptions = generateSelectOptions()
            return { ...state, loading: true, topReviewedBooksDetails: action.topReviewedBooksDetails, genreFilter: selectOptions.genreFilter }

        case actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_SUCCESS:
            return { ...state, data: action.data }

        default:
            return state;
    }
}