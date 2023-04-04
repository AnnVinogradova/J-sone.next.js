
export default function TableRow({user}) {
	return <>
	
				<tr>
    				<td>{user.name}</td>
    				<td>{user.email}</td>
    				<td>{user.address.city}</td>
    				<td>{user.phone}</td>
    				<td>{user.website}</td>
    				<td>{user.company.name}</td>
  				</tr>
	
	</>
}