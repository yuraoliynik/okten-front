import myAxios from './myAxios';
import {
    actionInsertUsers,
    actionAddUser,
    actionUpdateUser,
    actionDeleteUser
} from '../redux/actions';

const usersURL = '/users';

const getAllUsers = () => async (dispatch) => {
    const response = await myAxios.get(usersURL);

    dispatch(actionInsertUsers(response.data));
};

const createUser = (dataUserObj) => async (dispatch) => {
    const response = await myAxios.post(usersURL, dataUserObj);

    dispatch(actionAddUser(response.data));
};

const updateUser = (userId, dataUserObj) => async (dispatch) => {
    const response = await myAxios.put(`${usersURL}/${userId}`, dataUserObj);

    dispatch(actionUpdateUser(response.data));
};

const deleteUser = (userId) => async (dispatch) => {
    const response = await myAxios.delete(`${usersURL}/${userId}`);

    if (response.status === 204) {
        dispatch(actionDeleteUser(userId));
    }
};

export {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
