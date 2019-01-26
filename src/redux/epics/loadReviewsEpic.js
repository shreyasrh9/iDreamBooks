import { ofType } from 'redux-observable';
import { mergeMap, switchMap, map, filter } from 'rxjs/operators';
import { merge, of } from 'rxjs'
import * as actionTypes from '../../actions/actionTypes'

const loadReviewsUrl = (searchKey) => `https://idreambooks.com/api/books/reviews.json?q=${searchKey}&key=def3b3e41bfbbebbc04f7cb59ad6e96079374df5`


export const loadReviewsEpic = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.LOADREVIEWS),
    switchMap(action => retrieveViaAjax(loadReviewsUrl(action.searchKey))),
    map((result) => {
        return { type: actionTypes.LOADREVIEWS_SUCCESS, reviewDetails: result.response };
    })
)