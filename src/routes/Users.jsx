import React, { PropTypes } from 'react';


// Users 的 Presentational Component
// 暂时都没实现
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModel from '../components/Users/UserModal';


// 引入对应的样式
// 可以暂时新建一个空的
import styles from './Users.less';


function Users() {
  const userSearchProps = {};
  const userListProps = {
    total: 3,
    current: 1,
    loading: false,
    dataSource: [
      {
        name: '张三',
        age: 23,
        address: '成都',
      },
      {
        name: '李四',
        age: 24,
        address: '杭州',
      },
      {
        name: '王五',
        age: 25,
        address: '上海',
      },
    ],
  };
  const userModelProps = {};

  return (
    <div className={styles.normal}>
      <UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModel {...userModelProps} />
    </div>
  );
}

Users.propTypes = {

};

export default Users;
