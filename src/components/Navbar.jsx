import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../useContextUserExample/UsersContext'; 



const Navbar = () => {
  const { user } = useContext(UserContext)
  return (


   
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white text-xl font-bold">
          <span className="text-2xl">Web3</span> Logo
        </div>
        {user.name}
        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to='/'  className="text-white hover:text-gray-200 transition duration-300">Home</Link>
          <Link to='/validation'  className="text-white hover:text-gray-200 transition duration-300">Validation form</Link>
          <Link to='/validation-avancee'  className="text-white hover:text-gray-200 transition duration-300">Validation avancée des formulaires</Link>
          <Link to='/cars'  className="text-white hover:text-gray-200 transition duration-300">Cars List</Link>
          <Link to='/math'  className="text-white hover:text-gray-200 transition duration-300">Math </Link>
          <Link to='/axios'  className="text-white hover:text-gray-200 transition duration-300">Axios</Link>
          <Link to='/users'  className="text-white hover:text-gray-200 transition duration-300">users</Link>
          <Link to='/User-Management'  className="text-white hover:text-gray-200 transition duration-300">User-Management</Link>


        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
