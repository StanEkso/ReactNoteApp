import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LogoutElement from "../logoutelement/LogoutElement";
const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-black underline underline-offset-4" : "text-gray-500";

const Layout = () => {
  return (
    <>
      <header className="border-b-2 mb-2 z-10 sticky w-full top-0 bg-white">
        <div className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex py-2">
          <h1 className="font-bold">Notes</h1>
          <nav className="ml-auto flex space-x-4">
            <NavLink end to={"/"} className={getNavLinkClass}>
              About
            </NavLink>
            <NavLink end to={"/notes"} className={getNavLinkClass}>
              Notes
            </NavLink>
            <LogoutElement />
          </nav>
        </div>
      </header>
      <main className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
