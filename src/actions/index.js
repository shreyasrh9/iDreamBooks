import * as actionTypes from './actionTypes'
import * as config from '../config'

export function loadGenreSelectList() {
    return {
        type: actionTypes.LOADGENRESELECTLIST,
        genre: config.GENRES[0]
    }
}

export function hadleGenreChange(genre) {
    return{
        type: actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS,
        genre: genre.value
    }
}