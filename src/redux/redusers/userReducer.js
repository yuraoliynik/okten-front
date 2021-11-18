import {
    INSERT_USERS,
    CLEAR_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from '../actions';

const initialState = {
    users: []
};

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INSERT_USERS:
            return {users: [...payload]};

        case CLEAR_USERS:
            return {users: []};

        case ADD_USER:
            return {users: [...state.users, payload]};

        case UPDATE_USER:
            state.users.forEach((item, index) => {
                if (item._id === payload._id) {
                    state.users[index] = {...payload}
                }
            });

            return {users: [...state.users]};

        case DELETE_USER:
            return {
                users: state.users.filter((item) => item._id !== payload)
            }

        default:
            return state;
    }
};
