import { ofType } from 'redux-observable';
import { mergeMap, switchMap, map, filter } from 'rxjs/operators';
import { merge, of } from 'rxjs'
import * as actionTypes from '../../actions/actionTypes'

const recentlyReviewedTopPublicationsUrl = (genre) => `https://idreambooks.com/api/publications/recent_recos.json?key=def3b3e41bfbbebbc04f7cb59ad6e96079374df5&slug=${genre}`

export const loadGenreListEpic = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.LOADGENRESELECTLIST),
    switchMap(action => retrieveViaAjax(recentlyReviewedTopPublicationsUrl('all-books'))),
    map((result) => {
        return { type: actionTypes.LOADGENRESELECTLIST_SUCCESS, topReviewedBooksDetails: result.response };
    }
    )
);

// export const topPublicationsEpic = (action$, state$, { retrieveViaAjax }) => action$.pipe(
//     ofType(actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS),
//     switchMap(action => retrieveViaAjax(recentlyReviewedTopPublicationsUrl(action.genre))),
//     mergeMap((result) => {

//         return { type: actionTypes.RECENTLYREVIEWEDTOPPUBLICATIONS_SUCCESS, data: result };

//     })
// )