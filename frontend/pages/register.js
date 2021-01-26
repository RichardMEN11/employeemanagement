import Link from 'next/link';

const Register = () => {
  return (
    <div className="container w-screen h-screen flex justify-center items-center">
      <section className="flex-row">
        <h1 className="text-4xl text-center mb-10 text-nanoBlue">
          Account erstellen
        </h1>
        <form className="w-6/12 mx-auto">
          <input
            type="email"
            placeholder="E-Mail-Adresse"
            className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full my-4"
          />
          <input
            type="email"
            placeholder="Name der Firma"
            className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full my-4"
          />
          <input
            type="password"
            placeholder="Passwort"
            className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full my-4"
          />
          <input
            type="password"
            placeholder="Passwort wiederholen"
            className="border-gray-100 border-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full my-4"
          />
          <input
            type="submit"
            value="Einloggen"
            class="bg-giantRed text-white w-full py-3 px-3 rounded mt-7 pointer"
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
