import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import { dateFromISOString } from "../../utils/date";

const AboutPage = () => {
  const { user, logout } = useAuthContext();
  const creationString = useMemo(
    () => dateFromISOString(user?.createdAt),
    [user]
  );
  return (
    <div>
      <h4 className="text-2xl">Hello, {user?.name}!</h4>
      <p className="text-xl">
        Your email is{" "}
        <a href={`mailto:${user?.email}`} className="text-blue-500">
          {user?.email}
        </a>
      </p>
      <p>Your account is created at {creationString}</p>
      <div className="flex gap-2 flex-col flex-wrap max-w-md py-2">
        <Link
          to={"/notes"}
          className="py-1 px-2 border-2 hover:border-blue-500"
        >
          View your notes
        </Link>
        <p
          className="py-1 px-2 border-2 hover:border-blue-500 text-red-600 cursor-pointer"
          onClick={logout}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
