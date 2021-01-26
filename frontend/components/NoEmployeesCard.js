import Link from 'next/link';
import Person from '../assets/Person.svg';

const NoEmployeesCard = () => {
  return (
    <div className="bg-white w-4/12 rounded text-center">
      <Person className="mx-auto" />
      <h1 className="text-xl text-nanoBlue">Mitarbeiterübersicht</h1>
      <p className="text-sm mt-2 mb-5">
        Du hast noch keine Mitarbeiter angelegt.
      </p>
      <a
        href="dashboard/add"
        className="bg-giantRed text-white py-3 px-7 rounded pointer mb-7 inline-block"
      >
        Mitarbeiter anlegen
      </a>
    </div>
  );
};

export default NoEmployeesCard;
