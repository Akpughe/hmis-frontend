import React, { useState } from 'react';
import Navbrand from './Navbrand';

const Sidebar = () => {
  const [selected, setSelected] = useState(false);

  
  return (
    <nav className="bg-white h-screen shadow-xl w-72 fixed mt-16 ">
      <div className="p-7">
        <div class="flex flex-col space-y-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            class="text-gray-500 border-l-4 border-blue-600 px-5 py-4 text-sm font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            // class="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium "
            className={
              selected === true
                ? `text-gray-500 border-l-4 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium`
                : `text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium`
            }
            onClick={setSelected}
          >
            Appointment
          </a>
          <a
            href="#"
            class="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium"
          >
            Doctors
          </a>
          <a
            href="#"
            class="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium"
          >
            Nurses
          </a>
          <a
            href="#"
            class="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium"
          >
            Patients
          </a>
          <a
            href="#"
            class="text-gray-500 hover:border-blue-600 border-l-4 px-5 py-4 text-sm font-medium"
          >
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
