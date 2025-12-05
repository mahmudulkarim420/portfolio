import { Outlet } from 'react-router';
import Navbar from './../components/Navbar/Navbar';


const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 text-gray-900">
      
      <Navbar />
      
      
      <main className="flex-grow ">
        <Outlet />
      </main>
      
      
    </div>
  );
};

export default Root;
