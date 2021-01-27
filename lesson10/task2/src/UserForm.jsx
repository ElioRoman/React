import React from 'react';

const UserForm = ({ userData, handleChange }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
      />
    </form>
  );
};

export default UserForm;
