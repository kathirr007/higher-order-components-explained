import withData from "../hoc/with-data";

const ProfileListItem = ({ data }) => (
  <>
    {data.map((post) => (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </>
);
export default withData(ProfileListItem);
