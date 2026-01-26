import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const links =
    <>
    <li><Link to="/" className='font-medium'>Home</Link></li>
    <li><Link to="/listed-books" className='font-medium'>Listed Books</Link></li>
    <li><Link to="/pages-to-read" className='font-medium'>Pages to Read</Link></li>
    </>


    return (
        <div className="py-4">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className="text-2xl font-bold">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <button className="btn bg-green-500 hover:bg-green-600 text-white border-0 px-6">Sign In</button>
    <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white border-0 px-6">Sign Up</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;