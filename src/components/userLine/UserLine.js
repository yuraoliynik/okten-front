import './UserLine.css';

function UserLine({user}) {
    const {
        username,
        first_name,
        last_name,
        email,
        user_type
    } = user;

    return (
        <div className={'table-line line'}>
            <p>{username}</p>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{email}</p>
            <p>{user_type}</p>
        </div>
    );
}

export default UserLine;
