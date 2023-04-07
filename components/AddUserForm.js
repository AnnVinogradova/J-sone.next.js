import { useState } from 'react'; 
 
export default function AddUserForm ({ onAddUser }) { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [website, setWebsite] = useState(''); 
  const [address, setAddress] = useState({ city: ''});
  const [company, setCompany] = useState({ name: ''})
 
  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (name && email && phone && website && address.city && company.name) { 
      onAddUser({ name, email, phone, website, address, company });  
      setName('');  
      setEmail('');  
      setPhone('');  
      setWebsite(''); 
      setAddress({city:''}); 
      setCompany({name:''});
    } 
  };   
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <label htmlFor="name">Name:</label> 
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> 
 
      <label htmlFor="email">Email:</label> 
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
      
      <label htmlFor="address">Address:</label>  
      <input type="text" id="address" name="address" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />

      <label htmlFor="phone">Phone:</label> 
      <input type="phone" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> 

      <label htmlFor="website">Website:</label> 
      <input type="text" id="website" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} /> 
      
      <label htmlFor="company">Company:</label>  
      <input type="text" id="company" name="company" value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} />
      
      <button type="submit" className='add'>Add User</button> 
    </form> 
  ); 
};
