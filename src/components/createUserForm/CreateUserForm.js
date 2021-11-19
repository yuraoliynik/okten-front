import {useDispatch, useSelector} from 'react-redux';

import UserForm from '../userForm/UserForm';
import {createUser} from '../../services/user.service';
import {inputValidator, passwordValidator} from "../../validators";
import {actionInsertErrorUserData} from "../../redux/actions";

function CreateUserForm(props) {
    const {history} = props;

    const {
        userData: userDataObj,
        errorUserData,
        homeURL
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const handleClickCreate = () => {
        const {
            _id,
            repeat_password,
            ...userDataForCreate
        } = userDataObj

        const errorArray = Object.values(errorUserData);
        const error = errorArray.join('').length;

        const isCreateExist =
            (!error) &&
            (!Object.values(userDataForCreate).includes('')) &&
            userDataObj.password === userDataObj.repeat_password;

        if (isCreateExist) {
            dispatch(createUser(userDataForCreate));

            history.push(homeURL);

            return;
        }

        const errorPassword = inputValidator('password', userDataObj.password);

        const errorRepeatPassword =
            inputValidator('repeat_password', userDataObj.repeat_password) ||
            passwordValidator(userDataObj.password, userDataObj.repeat_password) || '';

        dispatch(actionInsertErrorUserData({
            ...errorUserData,
            password: errorPassword,
            repeat_password: errorRepeatPassword
        }));
    };

    return (
        <div className={'userList'}>
            <UserForm/>

            <div className={'button-create'}>
                <button onClick={handleClickCreate}>Create</button>
            </div>
        </div>
    );
}

export default CreateUserForm;