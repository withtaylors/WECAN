import Avatar from "./Styled/Avatar";

function Writer({ value }) {
  return (
    <div>
      <Avatar src={value.profile.photo} />
      <p>{value.name}</p>
    </div>
  );
}

export default Writer;
