import React, { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
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

export default RootLayout;
