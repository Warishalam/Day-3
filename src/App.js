import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';

const App = () => {
  const [editMode, setEditMode] = useState(false);

  const userData = {
    name: "Warish Alam",
    email: "warishalam349@gmail.com",
    bio: "My name is Warish Alam and i am software engineer.",
  };

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <h1>User Profile Application</h1>
      <button onClick={toggleMode}>
        {editMode ? "View Mode" : "Edit Mode"}
      </button>
      {editMode ? (
        <EditProfile {...userData} />
      ) : (
        <UserProfile {...userData} />
      )}
    </div>
  );
};

export default App;
