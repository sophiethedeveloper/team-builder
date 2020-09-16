import React, { useState } from "react";
import Card from './Components/Card';
import CardForm from './Components/CardForm'
import "./index.css";

function App() {

  const initialValues = [
    {
      id: 1,
      name: "Sofia Luna",
      email: "sophiethedeveloper@gmail.com",
      role: "Front End Developer",
    },
  ];

  const [cards, setCards] = useState(initialValues);

  const addNewCard = card => {
    setCards([...cards, {...card, id: Date.now()}]);
  }

  return <div className="App">
    <h1>My Members</h1>
    <CardForm addNewCard={addNewCard} />
    <Card cards={cards} />
  </div>;
}

export default App;
