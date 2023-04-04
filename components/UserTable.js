import { useState, useEffect } from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

export default function UserTable () {
  const [users, setUsers] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleSort = (field, direction) => {
    setSortField(field);
    setSortDirection(direction);
  }

  const sortedUsers = sortData(users, sortField, sortDirection);

  return <>
    <table>
      <TableHeader fields={['name', 'email', 'address.city', 'phone', 'website', 'company.name']} onSort={handleSort} />
      <tbody>
        {sortedUsers.map(user => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
    </>;
}

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

