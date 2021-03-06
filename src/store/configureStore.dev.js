 import {createStore, applyMiddleware} from 'redux';
 import rootReducer from '../reducers/rootReducer';
 import reduxImmutableStateVariant from 'redux-immutable-state-invariant';
 import thunk from 'redux-thunk';

 export default function configureStore(initalState) {
     return createStore(
         rootReducer,
         initalState,
         applyMiddleware(thunk, reduxImmutableStateVariant())
        );
 }