import './UserForm.css';

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {
    actionInsertUserData,
    actionInsertErrorUserData
} from '../../redux/actions';

import {
    inputValidator,
    passwordValidator
} from "../../validators";

function UserForm() {
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

    useEffect(() => {
        const errorUserDataArr = Object.entries(errorUserData);

        errorUserDataArr.forEach(item => {
            if (item[1]) {
                document.getElementsByClassName(item[0])[0].classList.add('error-border_style');
                return;
            }

            const checkErrStyle = document.getElementsByClassName(item[0])[0].classList.contains('error-border_style');

            if (checkErrStyle) {
                document.getElementsByClassName(item[0])[0].classList.remove('error-border_style');
            }
        });
    }, [errorUserData]);


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
            <div className={'input-wrap'}>
                <div>Username*</div>
                <input type="text"
                       name={'username'}
                       value={username}
                       onChange={handleChangeInput}
                       autoComplete="off"
                       className={'input username'}
                />
                <div className={'error-msg_style'}>
                    {errorUserData.username}
                </div>
            </div>

            <div className={'input-wrap'}>
                <div>First name*</div>
                <input
                    type="text"
                    name={'first_name'}
                    value={first_name}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    className={'input first_name'}
                />
                <div className={'error-msg_style'}>
                    {errorUserData.first_name}
                </div>
            </div>

            <div className={'input-wrap'}>
                <div>Last name*</div>
                <input
                    type="text"
                    name={'last_name'}
                    value={last_name}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    className={'input last_name'}
                />
                <div className={'error-msg_style'}>
                    {errorUserData.last_name}
                </div>
            </div>

            <div className={'input-wrap'}>
                <div>Email*</div>
                <input
                    type="text"
                    name={'email'}
                    value={email}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    className={'input email'}
                />
                <div className={'error-msg_style'}>
                    {errorUserData.email}
                </div>
            </div>

            <div className={'input-wrap'}>
                <div>Type*</div>
                <select
                    name={'user_type'}
                    value={user_type}
                    onChange={handleChangeInput}
                    className={'select user_type'}
                >
                    <option value="Admin">Admin</option>
                    <option value="Driver">Driver</option>
                </select>
            </div>

            <div className={'input-wrap'}>
                <div>Password*</div>
                <input
                    type="text"
                    name={'password'}
                    value={password}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    className={'input password'}
                />
                <div className={'error-msg_style'}>
                    {errorUserData.password}
                </div>
            </div>

            <div className={'input-wrap'}>
                <div>Repeat password*</div>
                <input
                    type="text"
                    name={'repeat_password'}
                    value={repeat_password}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    className={'input repeat_password'}
                />
                <div className={'error-msg_style'}>
                    {errorUserData.repeat_password}
                </div>
            </div>
        </form>
    );
}

export default UserForm;
