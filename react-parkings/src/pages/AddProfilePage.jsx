import React, { useState } from "react";

import Axios from "axios";

const AddProfilePage = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [age, setAge] = useState(0);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  const handleSubmit = (event) => {
    // POST request versturen naar een REST API

    // Manuele validatie a.h.v. JavaScript -> Vertrouw nooit de client of de browser van uw gebruikers
    // if (
    //   profile.firstName !== "" &&
    //   profile.lastName !== "" &&
    //   typeof profile.age === "number"
    // ) {
    const postUser = async () => {
      try {
        const response = await Axios.post(
          "https://jsonplaceholder.typicode.com/users",
          profile
        );

        console.log(response.data);
      } catch (error) {
        console.log("Er is een fout gebeurd bij het posten!");
      }
    };

    postUser();
    // }

    // Standaard behaviour van de browser uitschakelen
    event.preventDefault();
  };

  const handleChange = (event) => {
    // console.log(event.target.name);

    setProfile({
      ...profile,
      [event.target.name]:
        event.target.name === "age"
          ? event.target.valueAsNumber
          : event.target.value,
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {/* Gecontroleerd input element door React */}
        <input
          type="text"
          name="firstName"
          placeholder="Voornaam"
          className="px-4 py-2 block border rounded-md"
          value={profile.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Achternaam"
          className="px-4 py-2 block border rounded-md"
          value={profile.lastName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Leeftijd"
          className="px-4 py-2 block border rounded-md"
          value={profile.age}
          onChange={handleChange}
        />

        <button
          className="px-4 py-2 rounded-md bg-teal-600 hover:bg-teal-700"
          type="submit">
          Verstuur
        </button>
      </form>
    </div>
  );
};

export default AddProfilePage;
