import ProfileListItem from "../profile-list-item/profile-list-item.component";

const UserProfile = () => (
  <div className="container">
    <h1 style={{ marginBottom: 0 }}>Posts List</h1>
    {/* <h2 style={{ margin: 0 }}>
      {name} <small>{email}</small>
    </h2> */}
    <ProfileListItem dataSource="https://jsonplaceholder.typicode.com/posts" />
  </div>
);

export default UserProfile;
