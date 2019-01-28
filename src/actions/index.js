import * as actionTypes from './actionTypes'
import * as config from '../config'

// To load genre select options
export function loadGenreSelectList() {
    return {
        type: actionTypes.LOADGENRESELECTLIST,
        genre: config.GENRES[0]
    }
}

// To load reviewed books based on genre selected
export function hadleGenreChange(genre) {
    return {
        type: actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS,
        genre: genre.value
    }
}

// To fetch reviews based on book selected
export function fetchReviews(searchKey) {
    return {
        type: actionTypes.LOADREVIEWS,
        searchKey: searchKey
    }
}