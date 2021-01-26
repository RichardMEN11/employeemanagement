import Layout from '../../components/layout';
import { useFormik } from 'formik';

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

const Add = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      skills: '',
    },
    validate,
    onSubmit: (values) => {
      login(values);
    },
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
              <br />
              <input type="checkbox" name="vuejs" id="vuejs" />
              <input type="checkbox" name="react" id="react" />
              <input type="checkbox" name="vuejs" id="vuejs" />
              <input type="checkbox" name="vuejs" id="vuejs" />
              <input type="checkbox" name="vuejs" id="vuejs" />
              <input type="checkbox" name="vuejs" id="vuejs" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
