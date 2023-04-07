import { useState, useEffect } from 'react'; 
import TableHeader from '../components/TableHeader'; 
import TableRow from '../components/TableRow'; 
import AddUserForm from '../components/AddUserForm';
import EditUserForm from '../components/EditUserForm';

export default function UserTable () { 
  const [users, setUsers] = useState([]); 
  const [sortField, setSortField] = useState(''); 
  const [sortDirection, setSortDirection] = useState('asc'); 
  const [searchString, setSearchString] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); 
 
  useEffect(() => { 
    const fetchUsers = async () => { 
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
      const data = await response.json(); 
      setUsers(data); 
    } 
    fetchUsers(); 
  }, []); 
 
  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
  };


  const handleSort = (field, direction) => { 
    setSortField(field); 
    setSortDirection(direction); 
  } 
 
  const handleSearch = (event) => {  
    setSearchString(event.target.value); 
  } 
   
  const filteredUsers = users.filter(user => {  
    const searchValue = searchString.toLowerCase(); 
    return ( 
      user.name.toLowerCase().includes(searchValue) ||   
      user.email.toLowerCase().includes(searchValue) ||   
      user.address.city.toLowerCase().includes(searchValue) ||   
      user.phone.toLowerCase().includes(searchValue) ||   
      user.website.toLowerCase().includes(searchValue) ||   
      user.company.name.toLowerCase().includes(searchValue) 
    ); 
  }); 
 
   
  const sortData = (data, field, direction) => { 
  const sortedData = [...data]; 
  sortedData.sort((a, b) => { 
    const aValue = field.split('.').reduce((obj, key) => obj[key], a); 
    const bValue = field.split('.').reduce((obj, key) => obj[key], b); 
 
    const compareValueA = typeof aValue === 'string' ? aValue.toLowerCase() : aValue; 
    const compareValueB = typeof bValue === 'string' ? bValue.toLowerCase() : bValue; 
 
    if (compareValueA < compareValueB) { 
      return direction === 'asc' ? -1 : 1; 
    } 
    if (compareValueA > compareValueB) { 
      return direction === 'asc' ? 1 : -1; 
    } 
    return 0; 
  }); 
  return sortedData; 
} 
 
const sortedUsers = sortData(filteredUsers, sortField, sortDirection); 

const handleDelete = (id) => {
  const updatedUsers = users.filter((user) => user.id !== id);
  setUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSaveUser = (updatedUser) => {
    const updatedUsers = users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  return <> 
  <div>  
      <input type="text" value={searchString} onChange={handleSearch} placeholder="Search..." /> 
  </div>
  <div>
      <AddUserForm onAddUser={handleAddUser} /> 
  </div>
  {selectedUser && <EditUserForm user={selectedUser} onSave={handleSaveUser}/>}
    <table> 
      <TableHeader fields={['name', 'email', 'address.city', 'phone', 'website', 'company.name', 'Action']} onSort={handleSort} /> 
      <tbody> 
        {sortedUsers.map(user => ( 
          <TableRow key={user.id+1} user={user} handleDelete={handleDelete} handleEdit={handleEdit}/> 
        ))} 
      </tbody> 
    </table> 
    </>; 
}



