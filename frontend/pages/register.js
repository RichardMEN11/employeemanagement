import Link from 'next/link';
import { useFormik } from 'formik';
import { useAuth } from '../contexts/auth';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.company) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.email = 'Required';
  } else if (values.password !== values.passwordRepeat) {
    errors.password = 'Passwörter stimmen nicht überein';
  }

  if (!values.passwordRepeat) {
    errors.email = 'Required';
  } else if (values.password !== values.passwordRepeat) {
    errors.password = 'Passwörter stimmen nicht überein';
  }
  return errors;
};

const Register = (props) => {
  const { register } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      company: '',
      password: '',
      passwordRepeat: '',
    },
    validate,
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <div className="container w-screen h-screen flex justify-center items-center">
      <section className="flex-row">
        <h1 className="text-4xl text-center mb-10 text-nanoBlue">
          Account erstellen
        </h1>
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
              type="text"
              placeholder="Name der Firma"
              id="company"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            {formik.errors.company ? (
              <div className="text-giantRed">{formik.errors.company}</div>
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
          <div className="my-4">
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              value={formik.values.passwordRepeat}
              onChange={formik.handleChange}
              placeholder="Passwort wiederholen"
              className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            {formik.errors.passwordRepeat ? (
              <div className="text-giantRed">
                {formik.errors.passwordRepeat}
              </div>
            ) : null}
          </div>
          <input
            type="submit"
            value="Einloggen"
            className="bg-giantRed text-white w-full py-3 px-3 rounded mt-7 pointer"
          />
        </form>
        <div className="flex-row text-center justify-center items-center mt-20 text-nanoBlue">
          <p>Du hast bereiets einen Account?</p>
          <Link href="/" className="link">
            Jetzt einloggen
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
