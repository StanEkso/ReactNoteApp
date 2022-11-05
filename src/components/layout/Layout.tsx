import React from "react";
import { Outlet } from "react-router-dom";
import AuthDependedNavbar from "./AuthDependedNavbar";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 mb-2 z-10 sticky w-full top-0 bg-white">
        <div className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex py-2">
          <h1 className="font-bold">Notes</h1>
          <AuthDependedNavbar />
        </div>
      </header>
      <main className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex flex-col">
        <Outlet />
      </main>
      <footer className="sticky top-full border-t-2 bg-white">
        <div className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex py-2 justify-between">
          <p>
            Created by{" "}
            <a
              href="https://github.com/StanEkso"
              className="hover:text-blue-600"
            >
              StanEkso
            </a>
          </p>
          <p>2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
