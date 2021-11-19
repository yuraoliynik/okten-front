import './UserList.css';

import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import UsersTable from '../usersTable/UserTable';
import CreateUserForm from '../createUserForm/CreateUserForm';
import EditUserForm from '../editUserForm/EditUserForm';

import {
    createUser,
    updateUser
} from "../../services/user.service";

import {
    actionClearUserData, actionInsertErrorUserData,
    actionInsertUserData
} from '../../redux/actions';

import {
    inputValidator,
    passwordValidator
} from "../../validators";

function UserList(props) {
    const {history, match: {url}} = props;

    const dispatch = useDispatch();

    const handleClickCreateUser = () => {
        history.push(`${url}/create`);

        dispatch(actionClearUserData());
        dispatch(actionInsertUserData({
            password: '',
            repeat_password: ''
        }));
    };

    const userCreateOrEdit = (userDataObj, errorUserData, homeURL, createKey = 1) => {
        const {
            _id,
            repeat_password,
            ...userDataForFetch
        } = userDataObj

        const errorArray = Object.values(errorUserData);
        const error = errorArray.join('').length;

        const isCreateExist =
            (!error) &&
            (!Object.values(userDataForFetch).includes('')) &&
            userDataObj.password === userDataObj.repeat_password;

        if (isCreateExist && createKey) {
            dispatch(createUser(userDataForFetch));

            history.push(homeURL);

            return;
        }

        if (isCreateExist) {
            dispatch(updateUser(_id, userDataForFetch));

            history.push(homeURL);

            return;
        }

        const userDataArr = Object.entries(userDataForFetch);

        userDataArr.forEach(item => {
            if (item[0] !== 'repeat_password') {
                errorUserData[item[0]] = inputValidator(item[0], item[1]);
            }
        });

        let errorRepeatPassword =
            passwordValidator(userDataObj.password, userDataObj.repeat_password) ||
            inputValidator('repeat_password', userDataObj.repeat_password) || '';

       let checkLength;

        if (!errorRepeatPassword) {
            checkLength = (userDataObj.password.length > userDataObj.repeat_password.length);
        }

        if (checkLength) {
            errorRepeatPassword = 'Passwords do not match';
        }

        dispatch(actionInsertErrorUserData({
            ...errorUserData,
            repeat_password: errorRepeatPassword
        }));
    };

    return (
        <div className={'userList'}>
            <div className={'data-wrap'}>
                <div className={'table'}>
                    <div className={'button-create'}>
                        <button onClick={handleClickCreateUser} className={'button_style__blue'}>Create User</button>
                    </div>

                    <UsersTable/>
                </div>

                <div className={'form'}>
                    <Route path={`${url}/create`} render={(props) => {
                        return <CreateUserForm userCreateOrEdit={userCreateOrEdit} {...props}/>
                    }}/>

                    <Route path={`${url}/edit`} render={(props) => {
                        return <EditUserForm userCreateOrEdit={userCreateOrEdit} {...props}/>
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default UserList;
