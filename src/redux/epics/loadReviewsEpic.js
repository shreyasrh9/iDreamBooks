import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import * as actionTypes from '../../actions/actionTypes'

const loadReviewsUrl = (searchKey) => `https://idreambooks.com/api/books/reviews.json?q=${searchKey}&key=def3b3e41bfbbebbc04f7cb59ad6e96079374df5`

// Epics takes a stream of actions and returns a stream of actions.

// This epic catches the type LOADREVIEWS to load the reviews based on book selected
export const loadReviewsEpic = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.LOADREVIEWS),
    // Fetching the reviewed books using ajax
    switchMap(action => retrieveViaAjax(loadReviewsUrl(action.searchKey))),
    map((result) => {
        if (typeof result.response !== 'undefined') {
            return { type: actionTypes.LOADREVIEWS_SUCCESS, reviewDetails: result.response };
        } else {
            return { type: actionTypes.LOADREVIEWS_ERROR, error: result.response.error };
        }
    })
)