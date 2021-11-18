import './App.css';

import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {getAllUsers} from './services/user.service';
import UsersTable from './components/usersTable/UserTable';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className={'app'}>
            <div>

            </div>

            <UsersTable/>
        </div>
    );
}

export default App;
