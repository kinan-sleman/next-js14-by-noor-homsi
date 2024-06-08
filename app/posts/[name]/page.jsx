import { getUser } from "../../../helpers/api";

export default async function Post({ params }) {
  const user = await getUser(params.name);
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.id}</h3>
      <h4>{user.address.suite}</h4>
      <h4>{user.address.street}</h4>
    </>
  );
}
