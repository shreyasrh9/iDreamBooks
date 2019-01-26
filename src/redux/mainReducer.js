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

import { loadGenreListEpic, topPublicationsEpic } from './epics/loadReviewPublicationsEpic'

import { loadReviewsEpic } from './epics/loadReviewsEpic'

import { loadReviewPublicationsReducer } from './reducers/loadReviewPublicationsReducer'

import { loadReviewReducer } from './reducers/loadReviewReducer'

export const mainReducer = combineReducers({
    loadReviewPublicationsReducer: loadReviewPublicationsReducer,
    loadReviewReducer : loadReviewReducer
})

export const epics = (...args) => combineEpics(loadGenreListEpic, topPublicationsEpic, loadReviewsEpic)(...args, { ajax, retrieveViaAjax })
