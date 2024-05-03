import React, { useState } from 'react';

const EditProfile = ({ name, email, bio }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedBio, setEditedBio] = useState(bio);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setEditedBio(e.target.value);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>
        Name:
        <input type="text" value={editedName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={editedEmail} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Bio:
        <textarea value={editedBio} onChange={handleBioChange}></textarea>
      </label>
    </div>
  );
};

export default EditProfile;
