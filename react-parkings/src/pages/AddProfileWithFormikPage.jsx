import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import translations from "../utils/translations.json";

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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Voornaam is verplicht!"),
  lastName: Yup.string().required("Achternaam is verplicht!"),
  email: Yup.string()
    .email("Geen geldig email adres.")
    .required(translations.emailMsg.nl),
  password: Yup.string()
    .min(8, "Wachtwoord moet minstens uit 8 karakters bestaan.")
    .required("Wachtwoord is verplicht!"),
  age: Yup.number()
    .integer("Leeftijd mag geen kommagetal zijn.")
    .positive("Leeftijd moet positief zijn.")
    .required("Leeftijd is verplicht!"),
  consent: Yup.boolean(),
  gender: Yup.string().required("Geslacht is verplicht!"),
  course: Yup.string().required("Vak is verplicht!"),
  dateOfBirth: Yup.string().required("Geboortedatum is verplicht!"),
});

const AddProfileWithFormikPage = () => {
  // Formik

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: 0,
      consent: true,
      gender: "",
      course: courses[1].value,
      dateOfBirth: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
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
          className={`px-4 py-2 block border rounded-md ${
            touched.firstName && errors.firstName
              ? "border-red-600"
              : "border-gray-300"
          }`}
          value={values.firstName}
          onChange={handleChange}
          //   Focus verloren op dit invoerveld -> BLUR
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <p className="text-red-600 text-sm font-thin">{errors.firstName}</p>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Achternaam"
          className={`px-4 py-2 block border rounded-md ${
            touched.lastName && errors.lastName
              ? "border-red-600"
              : "border-gray-300"
          }`}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && (
          <p className="text-red-600 text-sm font-thin">{errors.lastName}</p>
        )}
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={`px-4 py-2 block border rounded-md ${
            touched.email && errors.email ? "border-red-600" : "border-gray-300"
          }`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <p className="text-red-600 text-sm font-thin">{errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Wachtwoord"
          className={`px-4 py-2 block border rounded-md ${
            touched.password && errors.password
              ? "border-red-600"
              : "border-gray-300"
          }`}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <p className="text-red-600 text-sm font-thin">{errors.password}</p>
        )}
        <input
          type="number"
          name="age"
          placeholder="Leeftijd"
          className={`px-4 py-2 block border rounded-md ${
            touched.age && errors.age ? "border-red-600" : "border-gray-300"
          }`}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.age && errors.age && (
          <p className="text-red-600 text-sm font-thin">{errors.age}</p>
        )}
        <div className="flex items-center gap-2">
          <label htmlFor="consent">Cookies accepteren:</label>
          <input
            id="consent"
            type="checkbox"
            name="consent"
            className="block h-6 w-6 rounded"
            checked={values.consent}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.consent && errors.consent && (
          <p className="text-red-600 text-sm font-thin">{errors.consent}</p>
        )}

        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="gender"
            id="genderM"
            value="male"
            className="block h-6 w-6 rounded"
            checked={values.gender === "male"}
            onChange={handleChange}
            onBlur={handleBlur}
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
            onBlur={handleBlur}
          />
          <label htmlFor="genderV">Vrouw</label>
        </div>
        {touched.gender && errors.gender && (
          <p className="text-red-600 text-sm font-thin">{errors.gender}</p>
        )}

        <select
          name="course"
          className="border rounded-md p-2"
          value={values.course}
          onBlur={handleBlur}
          onChange={handleChange}>
          {courses.map((c) => (
            <option key={c.id} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        {touched.course && errors.course && (
          <p className="text-red-600 text-sm font-thin">{errors.course}</p>
        )}

        <input
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`px-4 py-2 block border rounded-md ${
            touched.dateOfBirth && errors.dateOfBirth
              ? "border-red-600"
              : "border-gray-300"
          }`}
        />
        {touched.dateOfBirth && errors.dateOfBirth && (
          <p className="text-red-600 text-sm font-thin">{errors.dateOfBirth}</p>
        )}

        <button
          disabled={!dirty || !isValid}
          className="px-4 py-2 rounded-md bg-teal-600 hover:bg-teal-700"
          type="submit">
          Verstuur
        </button>
      </form>
    </div>
  );
};

export default AddProfileWithFormikPage;
