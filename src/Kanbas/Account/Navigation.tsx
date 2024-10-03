import React from 'react';
import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
    <Link 
      to="/Kanbas/Account/Signin" 
      className="list-group-item active border border-0"
    >
      <span className="wd-kanbas-nav-link">Signin</span>
    </Link>
    <Link 
      to="/Kanbas/Account/Signup" 
      className="list-group-item text-danger border border-0"
    >
      <span className="wd-kanbas-nav-link">Signup</span>
    </Link>
    <Link 
      to="/Kanbas/Account/Profile" 
      className="list-group-item text-danger border border-0"
    >
      <span className="wd-kanbas-nav-link">Profile</span>
    </Link>
  </div>
);}
