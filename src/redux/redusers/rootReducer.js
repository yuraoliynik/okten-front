import {
    INSERT_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,

    INSERT_USER_DATA,
    CLEAR_USER_DATA,

    INSERT_ERROR_USER_DATA,
    INSERT_URL
} from '../actions';

const defaultUserData = {
    _id: '',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '********',
    repeat_password: '********',
    user_type: 'Admin'
};

const errorUserData = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    repeat_password: '',
    user_type: ''
};


const initialState = {
    users: [],
    userData: {...defaultUserData},
    errorUserData: {...errorUserData},
    homeURL: ''
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INSERT_USERS:
            return {...state, users: [...payload]};

        case ADD_USER:
            return {...state, users: [...state.users, payload]};

        case UPDATE_USER:
            state.users.forEach((item, index) => {
                if (item._id === payload._id) {
                    state.users[index] = {...payload}
                }
            });

            return {...state, users: [...state.users]};

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((item) => item._id !== payload)
            }

        case INSERT_USER_DATA:
            return {...state, userData: {...state.userData, ...payload}};

        case CLEAR_USER_DATA:
            return {...state, userData: {...defaultUserData}};

        case INSERT_ERROR_USER_DATA:
            return {...state, errorUserData: {...state.errorUserData, ...payload}};

        case INSERT_URL:
            return {...state, homeURL: payload};

        default:
            return state;
    }
};

export default rootReducer;
