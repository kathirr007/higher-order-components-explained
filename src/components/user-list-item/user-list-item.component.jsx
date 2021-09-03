import withData from "../hoc/with-data";

const UserListItem = ({ data }) => (
  <>
    {data.map((user) => (
      <div className="post" key={user.id}>
        <h1> {user.name} </h1>
        <h2> {user.email} </h2>
      </div>
    ))}
  </>
);
export default withData(UserListItem);
