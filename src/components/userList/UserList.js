import './UserList.css';

import {Route} from "react-router-dom";

import UsersTable from '../usersTable/UserTable';
import CreateUserForm from '../createUserForm/CreateUserForm';
import EditUserForm from '../editUserForm/EditUserForm';
import {useDispatch} from "react-redux";

import {
    actionClearUserData,
    actionInsertUserData
} from '../../redux/actions';

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

    return (
        <div className={'userList'}>
            <div className={'button-create'}>
                <button onClick={handleClickCreateUser}>Create User</button>
            </div>

            <div className={'data-wrap'}>
                <div className={'table'}>
                    <UsersTable/>
                </div>

                <div className={'form'}>
                    <Route path={`${url}/create`} component={CreateUserForm}/>
                    <Route path={`${url}/edit`} component={EditUserForm}/>
                </div>
            </div>
        </div>
    );
}

export default UserList;