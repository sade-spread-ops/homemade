import React, { useEffect, useState } from 'react';
const axios = require('axios');
import Messages from './Messages.jsx';

const Profile = (props) => {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState(props.user.firstName);
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState('');
  const [lessee, setLessee] = useState(false);
  const [lessor, setLessor] = useState(false);
  const [location, setLocation] = useState('');
  const [imageURL, setImageURL] = useState('');

  const sendUpdatedProfile = () => {
    axios.put('http://localhost:8000/users', {
      email: props.user.email,
      phone: phone,
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      lessee: lessee,
      lessor: lessor,
      location: location,
      imageURL: imageURL
    });
  };


  return (
    <div>
      <form>
        <label for="phone">Phone Number</label>
        <input id="phone" type="text" onChange={(event) => setPhone(event.target.value)}></input><br></br>
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" defaultValue={props.user.firstName} onChange={(event) => setFirstName(event.target.value)}></input><br></br>
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" onChange={(event) => setLastName(event.target.value)} required></input><br></br>
        <label for="age">Age</label>
        <input id="age" type="number" onChange={(event) => setAge(event.target.value)}></input><br></br>
        <label for="gender">Gender</label>
        <input id="gender" type="text" onChange={(event) => setGender(event.target.value)}></input><br></br>
        <label for="lessee">Lessee</label>
        <input id="lessee" type="radio" name="lesseeOrLessor" onChange={() => setLessee(!lessee)}></input><br></br>
        <label for="lessor">Lessor</label>
        <input id="lessor" type="radio" name="lesseeOrLessor" onChange={() => setLessor(!lessor)}></input><br>
        </br>
        <label for="imageURL">Image URL</label>
        <input id="imageURL" type="url" onChange={(event) => setImageURL(event.target.value)}></input><br></br>
        <button onClick={() => sendUpdatedProfile()}>Create Profile</button>
        <Messages />
        
      </form>
    </div>
  );
};

export default Profile;