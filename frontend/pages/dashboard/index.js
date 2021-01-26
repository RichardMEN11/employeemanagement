import Layout from '../../components/layout';
import NoEmployeesCard from '../../components/NoEmployeesCard';
import Pen from '../../assets/Pen.svg';
import Link from 'next/link';

const Index = ({ children }) => {
  const data = [];
  return (
    <Layout>
      {data.length > 1 ? (
        <div className="container py-7 flex justify-center mx-auto">
          <NoEmployeesCard />
        </div>
      ) : (
        <>
          <div className="container pt-7 flex justify-center w-7/12 mx-auto rounded">
            <div className="w-full">
              <h3 className="uppercase text-nanoBlue">Mitarbeiter</h3>
              <div className="w-full bg-white text-center py-5 mt-2">
                <a href="/dashboard/add" className="text-giantRed">
                  &#65291; Neuen Mitarbeiter anlegen
                </a>
              </div>
            </div>
          </div>
          <div className="container w-7/12 mx-auto rounded">
            <div className="w-full">
              <div className="w-full bg-white p-5 mt-2">
                <div className="text-nanoBlue flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold">Hans Peter</h2>
                    <p>email@domain.com</p>
                  </div>
                  <button className="bg-slowGrey p-3 rounded">
                    <Pen></Pen>
                  </button>
                </div>
                <div className="flex w-full space-x-2 mt-5">
                  <div className="bg-nanoBlue text-white rounded py-1 px-2">
                    React
                  </div>
                  <div className="bg-nanoBlue text-white rounded py-1 px-2">
                    Angular
                  </div>
                  <div className="bg-nanoBlue text-white rounded py-1 px-2">
                    Nest.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Index;
