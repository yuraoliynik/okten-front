import './UserForm.css';

import {useDispatch, useSelector} from "react-redux";

import {
    actionInsertUserData,
    actionInsertErrorUserData
} from '../../redux/actions';

import {
    inputValidator,
    passwordValidator
} from "../../validators";

function UserForm({getErrors}) {
    const {
        userData: formState,
        errorUserData
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const {
        username,
        first_name,
        last_name,
        email,
        password,
        repeat_password,
        user_type
    } = formState;

    const handleChangeInput = (event) => {
        const {target: {name, value}} = event;

        event.preventDefault();

        const error = inputValidator(name, value);

        dispatch(actionInsertErrorUserData({
            ...errorUserData,
            [name]: error
        }));

        let errorRepeatPassword;

        if (name === 'repeat_password') {
            errorRepeatPassword = passwordValidator(password, value);
        }

        if (errorRepeatPassword) {
            dispatch(actionInsertErrorUserData({
                ...errorUserData,
                repeat_password: errorRepeatPassword
            }));
        }

        dispatch(actionInsertUserData({
            ...formState,
            [name]: value
        }));
    };

    return (
        <form className={'form'}>
            <input type="text" name={'username'} value={username} onChange={handleChangeInput}/>
            <div>
                {errorUserData.username}
            </div>
            <input type="text" name={'first_name'} value={first_name} onChange={handleChangeInput}/>
            <div>
                {errorUserData.first_name}
            </div>
            <input type="text" name={'last_name'} value={last_name} onChange={handleChangeInput}/>
            <div>
                {errorUserData.last_name}
            </div>
            <input type="text" name={'email'} value={email} onChange={handleChangeInput}/>
            <div>
                {errorUserData.email}
            </div>
            <select name={'user_type'} value={user_type} onChange={handleChangeInput}>
                <option value="Admin">Admin</option>
                <option value="Driver">Driver</option>
            </select>
            <input type="text" name={'password'} value={password} onChange={handleChangeInput}/>
            <div>
                {errorUserData.password}
            </div>
            <input type="text" name={'repeat_password'} value={repeat_password} onChange={handleChangeInput}/>
            <div>
                {errorUserData.repeat_password}
            </div>
        </form>
    );
}

export default UserForm;