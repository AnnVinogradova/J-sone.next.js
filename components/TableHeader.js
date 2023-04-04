import  { useState } from 'react';
 
export default function TableHeader ({ fields, onSort }) {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    onSort(field, sortDirection);
  }

  return <> 
    <thead>  
      <tr>  
        {fields.map(field => (  
          <th key={field} onClick={() => handleSort(field)}>  
            {field} {sortField === field && (sortDirection === 'asc' ? '↓' : '↑')}  
          </th>  
        ))}  
      </tr>  
    </thead>  
  </>;
}