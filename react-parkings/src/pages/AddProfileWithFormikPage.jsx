import React from "react";

import { useFormik } from "formik";

const courses = [
  {
    id: 1,
    value: "web1",
    label: "Web 1",
  },
  {
    id: 2,
    value: "web2",
    label: "Web 2",
  },
  {
    id: 3,
    value: "web3",
    label: "Web 3",
  },
];

const AddProfileWithFormikPage = () => {
  // Formik

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: 0,
      consent: true,
      gender: "",
      course: courses[1].value,
      dateOfBirth: undefined,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="p-4">
      <h1 className="my-4 text-4xl">Formulier met Formik</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Gecontroleerd input element door React */}
        <input
          //   id="firstName"
          type="text"
          name="firstName"
          placeholder="Voornaam"
          className="px-4 py-2 block border rounded-md"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Achternaam"
          className="px-4 py-2 block border rounded-md"
          value={values.lastName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Leeftijd"
          className="px-4 py-2 block border rounded-md"
          value={values.age}
          onChange={handleChange}
        />

        <div className="flex items-center gap-2">
          <label htmlFor="consent">Cookies accepteren:</label>
          <input
            id="consent"
            type="checkbox"
            name="consent"
            className="block h-6 w-6 rounded"
            checked={values.consent}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="gender"
            id="genderM"
            value="male"
            className="block h-6 w-6 rounded"
            checked={values.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="genderM">Man</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="gender"
            id="genderV"
            value="female"
            className="block h-6 w-6 rounded"
            checked={values.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="genderV">Vrouw</label>
        </div>

        <select
          name="course"
          className="border rounded-md p-2"
          value={values.course}
          onChange={handleChange}>
          {courses.map((c) => (
            <option key={c.id} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          className="block h-6 w-6 rounded"
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

export default AddProfileWithFormikPage;
