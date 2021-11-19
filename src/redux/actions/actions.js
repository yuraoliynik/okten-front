import {
    INSERT_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,

    INSERT_USER_DATA,
    CLEAR_USER_DATA,

    INSERT_ERROR_USER_DATA,
    INSERT_URL
} from './actionTypes';

const actionInsertUsers = (usersArray) => {
    return {type: INSERT_USERS, payload: usersArray};
}

const actionAddUser = (userDataObj) => {
    return {type: ADD_USER, payload: userDataObj};
}

const actionUpdateUser = (userDataObj) => {
    return {type: UPDATE_USER, payload: userDataObj};
}

const actionDeleteUser = (userId) => {
    return {type: DELETE_USER, payload: userId};
}

const actionInsertUserData = (userDataObj) => {
    return {type: INSERT_USER_DATA, payload: userDataObj};
}

const actionClearUserData = () => {
    return {type: CLEAR_USER_DATA};
}

const actionInsertErrorUserData = (userDataObj) => {
    return {type: INSERT_ERROR_USER_DATA, payload: userDataObj};
}

const actionInsertURL = (url) => {
    return {type: INSERT_URL, payload: url};
}

export {
    actionInsertUsers,
    actionAddUser,
    actionUpdateUser,
    actionDeleteUser,

    actionInsertUserData,
    actionClearUserData,

    actionInsertErrorUserData,
    actionInsertURL
};
