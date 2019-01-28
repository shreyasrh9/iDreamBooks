import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import * as actionTypes from '../../actions/actionTypes'

const recentlyReviewedTopPublicationsUrl = (genre) => `https://idreambooks.com/api/publications/recent_recos.json?key=def3b3e41bfbbebbc04f7cb59ad6e96079374df5&slug=${genre}`

// Epics takes a stream of actions and returns a stream of actions.

// This epic catches the type LOADGENRESELECTLIST to load the reviewed books of 'all-books' genre
export const loadGenreListEpic = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.LOADGENRESELECTLIST),
    // Fetching the reviewed books using ajax
    switchMap(action => retrieveViaAjax(recentlyReviewedTopPublicationsUrl('all-books'))),
    map((result) => {
        if (typeof result.response !== 'undefined') {
            return { type: actionTypes.LOADGENRESELECTLIST_SUCCESS, topReviewedBooksDetails: result.response };
        } else {
            return { type: actionTypes.LOADGENRESELECTLIST_ERROR, error: result.response.error };
        }
    }
    )
);

// This epic catches the type RECENTLYREVIEWEDTOPPUBLICATIONS to load the reviewed books based on genre selection
export const topPublicationsEpic = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS),
    // Fetching the reviewed books using ajax
    switchMap(action => retrieveViaAjax(recentlyReviewedTopPublicationsUrl(action.genre))),
    map((result) => {
        if (typeof result.response !== 'undefined') {
            return { type: actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_SUCCESS, topReviewedBooksDetails: result.response };
        } else {
            return { type: actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_ERROR, error: result.response.error };
        }
    })
)

