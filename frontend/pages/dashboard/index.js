import Layout from '../../components/layout';
import NoEmployeesCard from '../../components/NoEmployeesCard';
import Pen from '../../assets/Pen.svg';
import { useAuth } from '../../contexts/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Index = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, getAllEmployees } = useAuth();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    } else {
      fetchData();
    }
  }, []);

  async function fetchData() {
    const data = await getAllEmployees();
    setEmployees(data);
  }

  return (
    <Layout>
      {employees && employees.length < 1 ? (
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
              {employees &&
                employees.map((employee) => (
                  <div className="w-full bg-white p-5 mt-2" key={employee.id}>
                    <div className="text-nanoBlue flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-bold">
                          {employee.firstname} {employee.lastName}
                        </h2>
                        <p>{employee.email}</p>
                      </div>
                      <Link href={`/dashboard/update/${employee.id}`}>
                        <button className="bg-slowGrey p-3 rounded">
                          <Pen></Pen>
                        </button>
                      </Link>
                    </div>
                    <div className="flex w-full space-x-2 mt-5">
                      {employee.skills.map((skill) => (
                        <div className="bg-nanoBlue text-white rounded py-1 px-2">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {!employees && (
            <div className="container w-7/12 mx-auto text-center mt-3">
              <button
                onClick={() => fetchData()}
                className="bg-giantRed text-white py-3 px-7 rounded pointer"
              >
                Update
              </button>
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default Index;
