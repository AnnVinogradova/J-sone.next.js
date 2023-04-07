
export default function TableRow({ user, handleDelete, handleEditUser}) {

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address?.city}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company?.name}</td>
      <td>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
		<button onClick={() => handleEditUser(user.id)}>Edit</button>
      </td>
    </tr>
  );
}