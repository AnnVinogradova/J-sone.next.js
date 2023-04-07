
export default function TableRow({ user, handleDelete, handleEdit}) {

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address?.city}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company?.name}</td>
      <td>
        <button onClick={() => handleDelete(user.id)} className="del">Delete</button>
		<button className="edit" onClick={() => handleEdit(user)}>Edit</button>
      </td>
    </tr>
  );
}