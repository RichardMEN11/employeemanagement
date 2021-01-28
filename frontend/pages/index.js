import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../contexts/auth';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.email = 'Required';
  }
  return errors;
};

export default function Home() {
  const { login, error } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <div className="container w-screen h-screen flex justify-center items-center mx-auto">
      <section className="flex-row">
        <h1 className="text-4xl text-center mb-10 text-nanoBlue">Willkommen</h1>
        {error ? (
          <div className="text-giantRed">
            Fehler beim Login{' '}
            <span role="img" aria-label="emoji">
              😶
            </span>
            . Probiere es später erneut.
          </div>
        ) : null}
        <form className="w-80 mx-auto" onSubmit={formik.handleSubmit}>
          <div className="my-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail-Adresse"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            {formik.errors.email ? (
              <div className="text-giantRed">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="my-4">
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Passwort"
              className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            {formik.errors.password ? (
              <div className="text-giantRed">{formik.errors.password}</div>
            ) : null}
          </div>
          <input
            type="submit"
            value="Einloggen"
            className="bg-giantRed text-white w-full py-3 px-3 rounded mt-7 pointer"
          />
        </form>
        <div className="flex-row text-center justify-center items-center mt-20 text-nanoBlue">
          <p>Du hast noch keinen Account?</p>
          <Link href="/register" className="link">
            Jetzt registrieren
          </Link>
        </div>
      </section>
    </div>
  );
}
