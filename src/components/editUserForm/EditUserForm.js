import './EditUserForm.css';

import {useDispatch, useSelector} from 'react-redux';

import UserForm from '../userForm/UserForm';
import {deleteUser} from '../../services/user.service';

function EditUserForm(props) {
    const {history, userCreateOrEdit} = props;

    const {
        userData: editUserData,
        errorUserData,
        homeURL
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const handleClickSave = () => {
        userCreateOrEdit(editUserData, errorUserData, homeURL, 0);
    };

    const handleClickDelete = () => {
        dispatch(deleteUser(editUserData._id));

        history.push(homeURL);
    };

    return (
        <div className={'form-wrap element_style'}>
            <div className={'form-title'}>
                {editUserData.first_name} {editUserData.last_name}
            </div>

            <UserForm/>

            <div className={'button-block'}>
                <div>
                    <button onClick={handleClickDelete} className={'button_style__red'}>Delete</button>
                </div>

                <div>
                    <button onClick={handleClickSave} className={'button_style__blue'}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditUserForm;
