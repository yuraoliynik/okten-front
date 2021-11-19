import {useDispatch, useSelector} from 'react-redux';

import UserForm from '../userForm/UserForm';

import {
    updateUser,
    deleteUser
} from '../../services/user.service';

function EditUserForm(props) {
    const {history} = props;

    const {
        userData: editUserData,
        homeURL
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const handleClickSave = () => {
        const {
            _id: userId,
            password,
            repeat_password,
            ...userDataForUpdate
        } = editUserData;

        const isPasswordChange = (password === repeat_password) &&
            (password !== '********')

        if (isPasswordChange) {
            userDataForUpdate.password = password;
        }

        dispatch(updateUser(userId, userDataForUpdate));
    };

    const handleClickDelete = () => {
        dispatch(deleteUser(editUserData._id));

        history.push(homeURL);
    };

    return (
        <div className={'userList'}>
            <UserForm/>

            <div className={'button-block'}>
                <button onClick={handleClickDelete}>Delete</button>

                <button onClick={handleClickSave}>Save</button>
            </div>
        </div>
    );
}

export default EditUserForm;