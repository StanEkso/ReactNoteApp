import React from "react";
import { NavLink } from "react-router-dom";
const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-black underline underline-offset-4" : "text-gray-500";

const AuthDependedNavbar = () => {
  const isAuthed = false;
  return (
    <nav className="ml-auto flex space-x-4">
      {isAuthed && (
        <>
          <NavLink end to={"/about"} className={getNavLinkClass}>
            About
          </NavLink>
          <NavLink end to={"/notes"} className={getNavLinkClass}>
            Notes
          </NavLink>
        </>
      )}
      {!isAuthed && (
        <>
          <NavLink end to={"/login"} className={getNavLinkClass}>
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default AuthDependedNavbar;
