import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax'

const retrieveViaAjax = (url) => ajax({
    url: url,
    crossDomain: true,
    method: 'GET',
    withCredentials: false,
    responseType: 'json'
});

import { loadGenreListEpic } from './epics/loadReviewPublicationsEpic'

import { loadReviewPublicationsReducer } from './reducers/loadReviewPublicationsReducer'

export const mainReducer = combineReducers({
    loadReviewPublicationsReducer: loadReviewPublicationsReducer
})

export const epics = (...args) => combineEpics(loadGenreListEpic)(...args, { ajax, retrieveViaAjax })
