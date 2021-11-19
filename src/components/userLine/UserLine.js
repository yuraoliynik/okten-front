import './UserLine.css';

import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {actionInsertUserData} from '../../redux/actions';

function UserLine({user}) {
    const {
        username,
        first_name,
        last_name,
        email,
        user_type
    } = user;

    const homeURL = useSelector(({homeURL}) => homeURL);

    const dispatch = useDispatch();

    const history = useHistory();

    const {location: {pathname}} = history;

    const handleClickLine = () => {
        if (pathname === homeURL) {
            dispatch(actionInsertUserData(user));

            return history.push(`${pathname}/edit`);
        }

        if (pathname === `${homeURL}/edit`) {
            return dispatch(actionInsertUserData(user));
        }
    };

    return (
        <div className={'table-line line'} onClick={handleClickLine}>
            <p>{username}</p>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{email}</p>
            <p>{user_type}</p>
        </div>
    );
}

export default UserLine;
