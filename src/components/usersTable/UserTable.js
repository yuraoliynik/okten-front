import './UsersTable.css';

import {useSelector} from 'react-redux';

import UserLine from '../userLine/UserLine';

function UsersTable() {
    const users = useSelector(({users}) => users);
    console.log(users);
    return (
        <div className={'table'}>
            <div className={'table-title'}>
                <div>USERNAME</div>
                <div>FIRST_NAME</div>
                <div>LAST_NAME</div>
                <div>EMAIL</div>
                <div>TYPE</div>
            </div>

            <div className={'table-body'}>
                {
                    users.map((item, index) => <UserLine user={item} key={index}/>)
                }
            </div>

            <div className={'table-footer'}>

            </div>
        </div>
    );
}

export default UsersTable;
