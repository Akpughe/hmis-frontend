import React from 'react';

const Navbrand = () => {
  return (
    <div class="flex-shrink-0 flex items-center">
      <img
        class="block lg:hidden h-14 w-auto"
        src="/hpro.png"
        alt="HealthPro"
      />
      <img
        class="hidden lg:block h-14 w-auto"
        src="/hpro.png"
        alt="HealthPro"
      />
    </div>
  );
};

export default Navbrand;
