import Layout from '../../components/layout';
import { useFormik } from 'formik';
import { useAuth } from '../../contexts/auth';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Add = () => {
  const router = useRouter();
  const { isAuthenticated, addEmployee } = useAuth();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      vuejs: false,
      react: false,
      angular: false,
      nodejs: false,
      nestjs: false,
      typescript: false,
    },
    validate,
    onSubmit: (values) => {
      const { email, firstname, lastname, ...allSkills } = values;
      let skills = [];
      Object.entries(allSkills).forEach((skill) => {
        if (skill[1]) {
          skills.push(skill[0]);
        }
      });
      addEmployee({ email, firstname, lastname, skills });
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  });

  return (
    <Layout>
      <div className="container pt-7 flex justify-center w-7/12 mx-auto rounded">
        <div className="w-full bg-white p-5 mt-2">
          <h1 className="text-nanoBlue">Kontaktdaten</h1>
          <form className="w-full mx-auto" onSubmit={formik.handleSubmit}>
            <div className="my-4">
              <input
                type="firstname"
                id="firstname"
                name="firstname"
                placeholder="Vorname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
              {formik.errors.firstname ? (
                <div className="text-giantRed">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div className="my-4">
              <input
                type="lastname"
                id="lastname"
                name="lastname"
                placeholder="Nachname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
              {formik.errors.lastname ? (
                <div className="text-giantRed">{formik.errors.lastname}</div>
              ) : null}
            </div>
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
              <label className="text-nanoBlue">Fähigkeiten</label>
              <div className="flex space-x-3 pt-3">
                <label
                  htmlFor="vuejs"
                  className={
                    formik.values.vuejs
                      ? 'border-2 rounded px-2 py-1 bg-nanoBlue border-nanoBlue text-white'
                      : 'border-2 rounded px-2 py-1 border-slowGrey text-nanoBlue'
                  }
                >
                  Vuejs
                  <input
                    type="checkbox"
                    name="vuejs"
                    id="vuejs"
                    value={formik.values.vuejs}
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  htmlFor="react"
                  className={
                    formik.values.react
                      ? 'border-2 rounded px-2 py-1 bg-nanoBlue border-nanoBlue text-white'
                      : 'border-2 rounded px-2 py-1 border-slowGrey text-nanoBlue'
                  }
                >
                  React
                  <input
                    type="checkbox"
                    name="react"
                    id="react"
                    value={formik.values.react}
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  htmlFor="angular"
                  className={
                    formik.values.angular
                      ? 'border-2 rounded px-2 py-1 bg-nanoBlue border-nanoBlue text-white'
                      : 'border-2 rounded px-2 py-1 border-slowGrey text-nanoBlue'
                  }
                >
                  Angular
                  <input
                    type="checkbox"
                    name="angular"
                    id="angular"
                    value={formik.values.angular}
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  htmlFor="nodejs"
                  className={
                    formik.values.nodejs
                      ? 'border-2 rounded px-2 py-1 bg-nanoBlue border-nanoBlue text-white'
                      : 'border-2 rounded px-2 py-1 border-slowGrey text-nanoBlue'
                  }
                >
                  Node.js
                  <input
                    type="checkbox"
                    name="nodejs"
                    id="nodejs"
                    value={formik.values.nodejs}
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  htmlFor="nestjs"
                  className={
                    formik.values.nestjs
                      ? 'border-2 rounded px-2 py-1 bg-nanoBlue border-nanoBlue text-white'
                      : 'border-2 rounded px-2 py-1 border-slowGrey text-nanoBlue'
                  }
                >
                  Nest.js
                  <input
                    type="checkbox"
                    name="nestjs"
                    id="nestjs"
                    value={formik.values.nestjs}
                    onChange={formik.handleChange}
                  />
                </label>
                <label
                  htmlFor="typescript"
                  className={
                    formik.values.typescript
                      ? 'border-2 rounded px-2 py-1 bg-nanoBlue border-nanoBlue text-white'
                      : 'border-2 rounded px-2 py-1 border-slowGrey text-nanoBlue'
                  }
                >
                  Typescript
                  <input
                    type="checkbox"
                    name="typescript"
                    id="typescript"
                    value={formik.values.typescript}
                    onChange={formik.handleChange}
                  />
                </label>
                <div className="right-0 fixed bg-white bottom-0 w-full py-5 px-3">
                  <div className="container w-7/12 mx-auto flex justify-between">
                    <Link href="/dashboard">
                      <button className="bg-slowGrey text-nanoBlue py-3 px-7 rounded pointer">
                        Abbrechen
                      </button>
                    </Link>
                    <input
                      type="submit"
                      value="Speichern"
                      className="bg-giantRed text-white py-3 px-7 rounded pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
