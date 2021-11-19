import './CreateUserForm.css';

import {useSelector} from 'react-redux';

import UserForm from '../userForm/UserForm';

function CreateUserForm(props) {
    const {userCreateOrEdit} = props;

    const {
        userData: userDataObj,
        errorUserData,
        homeURL
    } = useSelector(state => state);

    const handleClickCreate = () => {
        userCreateOrEdit(userDataObj, errorUserData, homeURL, 1)
    };

    return (
        <div className={'form-wrap element_style'}>
            <div className={'form-title'}>
                Create new user
            </div>
            <UserForm/>

            <div className={'button-create-user'}>
                <button onClick={handleClickCreate} className={'button_style__blue'}>Create</button>
            </div>
        </div>
    );
}

export default CreateUserForm;
