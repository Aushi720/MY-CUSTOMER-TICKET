import React from 'react';

const Navbar = () => {
    return (
        

         <nav className="px-8 py-4 flex justify-between items-center container mx-auto">
        <h1 className="md:text-xl text-sm font-bold">PH University</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600">
            Changelog
          </a>
          <a href="#" className="text-gray-600">
           Blog
          </a>

          <a href="#" className="text-gray-600">
            Download
          </a>

          <a href="#" className="text-gray-600">
            Contact
          </a> 

           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Ticket
          </button>

      </div>
       </nav>
    );
};

export default Navbar;