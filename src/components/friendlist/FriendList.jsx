import propTypes from 'prop-types';
import './FriendList.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="itemfriend" key={friend.id}>
          <span
            className="status"
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>
          <img
            src={friend.avatar}
            alt={friend.name}
            className="friendavatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};

export default FriendList;
