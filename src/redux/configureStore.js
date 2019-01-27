import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { mainReducer, epics } from './mainReducer';

import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

function configureStore() {
    const store = createStore(
        mainReducer,
        applyMiddleware(
            epicMiddleware,
            logger
        )
    );

    epicMiddleware.run(epics);

    return store;
}

export const store = configureStore();