import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import {userReducer} from '../redusers/userReducer';

const store = createStore(userReducer, applyMiddleware(ReduxThunk));

export default store;