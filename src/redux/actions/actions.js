import {
    INSERT_USERS,
    CLEAR_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from './actionTypes';

const actionInsertUsers = (usersArray) => {
    return {type: INSERT_USERS, payload: usersArray};
}

const actionClearUsers = () => {
    return {type: CLEAR_USERS};
}

const actionAddUser = (userObj) => {
    return {type: ADD_USER, payload: userObj};
}

const actionUpdateUser = (userObj) => {
    return {type: UPDATE_USER, payload: userObj};
}

const actionDeleteUser = (userId) => {
    return {type: DELETE_USER, payload: userId};
}

export {
    actionInsertUsers,
    actionClearUsers,
    actionAddUser,
    actionUpdateUser,
    actionDeleteUser
};
