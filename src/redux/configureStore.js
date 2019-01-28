import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { mainReducer, epics } from './mainReducer';

import { createLogger } from 'redux-logger';

// Used to create an instance of the actual redux-observable middleware.
const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

function configureStore() {
    // Redux store that holds the complete state tree of the app
    const store = createStore(
        mainReducer,
        applyMiddleware(
            epicMiddleware,
            logger
        )
    );
    
    // To run the middleware with the combined epics.
    epicMiddleware.run(epics);

    return store;
}

export const store = configureStore();