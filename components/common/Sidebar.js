import React from 'react';
import Navbrand from './Navbrand';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 h-screen w-72">
      <div className="p-7">
        {/* logo */}
        <div className="mb-8">
          <Navbrand />
        </div>
        <div class="flex flex-col space-y-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            class="bg-gray-900 text-white px-5 py-4 rounded-md text-sm font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-4 rounded-md text-sm font-medium"
          >
            Team
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-4 rounded-md text-sm font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-4 rounded-md text-sm font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
