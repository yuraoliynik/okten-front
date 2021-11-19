import './App.css';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import {Redirect} from 'react-router'
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {actionInsertURL} from "./redux/actions";
import {getAllUsers} from './services/user.service';
import UserList from './components/userList/UserList';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionInsertURL('/user-list'));
        dispatch(getAllUsers());
    }, []);

    return (
        <Router basename={'/'}>
            <Redirect from='/' to='/user-list'/>
            <Route path={'/user-list'} component={UserList}/>
        </Router>
    );
}

export default App;
