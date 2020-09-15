import React, { useState } from "react";

const CardForm = (props) => {
  const [card, setCard] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChanges = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewCard(card);
    setCard({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChanges}
          value={card.name}
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="name"
          type="email"
          placeholder="Email"
          onChange={handleChanges}
          value={card.email}
          name="email"
        />

        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          placeholder="Role"
          onChange={handleChanges}
          value={card.role}
          name="role"
        />

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default CardForm;
