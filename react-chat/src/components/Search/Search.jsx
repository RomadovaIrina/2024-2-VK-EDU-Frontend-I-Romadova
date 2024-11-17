import React from 'react';
import classNames from 'classnames';
import styles from './Search.module.scss';
import DEFAULT_AVATAR from "../../../public/temp.png"


const Search = ({ users, selected, setSelected }) => {
    return (
      <ul className={styles.userList}>
        {users?.map((user) => (
          <li
            key={user.id}
            className={classNames(styles.userItem, {
              [styles.selected]: selected === user.id,
            })}
            onClick={() => setSelected(user.id)}
          >
            <img src={user.avatar || DEFAULT_AVATAR} alt={user.username} className={styles.userAvatarList} />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
    )
  }

export default Search;