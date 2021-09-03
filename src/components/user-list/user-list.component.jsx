import React from "react";

// import withData from "../hoc/with-data";
import UserListItem from "../user-list-item/user-list-item.component";

const UserList = ({ data }) => (
  <div className="container user-list">
    <h1> Users List </h1>
    <UserListItem dataSource="https://jsonplaceholder.typicode.com/users" />
    {/* {data.map((user) => (
      <div className="post" key={user.id}>
        <h1> {user.name} </h1>
        <h2> {user.email} </h2>
      </div>
    ))} */}
  </div>
);

export default UserList;
