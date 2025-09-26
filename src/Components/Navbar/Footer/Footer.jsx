import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
       
        <div>
          <h3 className="text-xl font-bold mb-4">CS — Ticket System</h3>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Mission</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Sales</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Products & Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Customer Stories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Download Apps</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Information</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Join Us</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Social Links</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-gray-500  rounded-3xl ">X</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">@CS — Ticket System</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">in</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">@CS — Ticket System</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">f</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">@CS — Ticket System</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">✉️</span>
              <a href="mailto:support@cst.com" className="text-gray-400 hover:text-white text-sm">support@cst.com</a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;