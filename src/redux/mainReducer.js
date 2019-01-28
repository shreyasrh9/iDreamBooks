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


// combine multiple reducers into a single one
export const mainReducer = combineReducers({
    loadReviewPublicationsReducer: loadReviewPublicationsReducer,
    loadReviewReducer : loadReviewReducer
})

// combine multiple epics into a single one and passing retrieveViaAjax as an argument which can be used while writing epics
export const epics = (...args) => combineEpics(loadGenreListEpic, topPublicationsEpic, loadReviewsEpic)(...args, { retrieveViaAjax })
