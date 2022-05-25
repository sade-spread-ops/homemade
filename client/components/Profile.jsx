import React, { useState } from 'react';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState('');
  const [lessee, setLessee] = useState(false);
  const [lessor, setLessor] = useState(false);
  const [location, setLocation] = useState('');
  const [imageURL, setImageURL] = useState('');

  return (
    <div>
      <form>
        <label for="email">Email Address</label>
        <input id="email" type="text" onChange={(event) => setEmail(event.target.value)}></input><br></br>
        <label for="phone">Phone Number</label>
        <input id="phone" type="text" onChange={(event) => setPhone(event.target.value)}></input><br></br>
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" onChange={(event) => setFirstName(event.target.value)}></input><br></br>
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" onChange={(event) => setLastName(event.target.value)}></input><br></br>
        <label for="age">Age</label>
        <input id="age" type="number" onChange={(event) => setAge(event.target.value)}></input><br></br>
        <label for="gender">Gender</label>
        <input id="gender" type="text" onChange={(event) => setGender(event.target.value)}></input><br></br>
        <label for="lessee">Lessee</label>
        <input id="lessee" type="checkbox" onChange={() => setLessee(!lessee)}></input><br></br>
        <label for="lessor">Lessor</label>
        <input id="lessor" type="checkbox" onChange={() => setLessor(!lessor)}></input><br>
        </br>
        <label for="imageURL">Image URL</label>
        <input id="imageURL" type="url" onChange={(event) => setImageURL(event.target.value)}></input><br></br>
        <button>Create Profile</button>
      </form>
    </div>
  );
};