import * as actionTypes from './actionTypes'

export function loadGenreSelectList(genre) {
    return {
        type: 'LOADGENRESELECTLIST',
        genre: 'all-books'
    }
}