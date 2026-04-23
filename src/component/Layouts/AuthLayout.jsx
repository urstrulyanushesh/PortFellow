import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
   
        <div >
          {/* Login or Signup components render here */}
          <Outlet />
        </div>

        
  );
};

export default AuthLayout;