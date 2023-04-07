
import { useState } from 'react';

export default function EditUserForm ({ user, onSave }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(user.address.city);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [company, setCompany] = useState(user.company.name);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { id: user.id, name, email, phone, website, address: {city:city}, company: {name:company}};
    onSave(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Website:
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </label>
      <label> 
        City: 
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value )} 
        /> 
      </label> 
      <label> 
        Company: 
        <input 
          type="text" 
          value={company} 
          onChange={(e) => setCompany(e.target.value )} 
        /> 
      </label> 
      <button type="submit">Save</button>
    </form>
  );
};

 