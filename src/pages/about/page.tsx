import React, { useMemo } from "react";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";

const AboutPage = () => {
  const { user } = useAuthContext();
  const creationString = useMemo(() => {
    const date = new Date(user?.createdAt || Date.now());
    return date.toLocaleDateString("en", {
      month: "short",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }, [user]);
  return (
    <div>
      <h4>Hello, {user?.name}!</h4>
      <p>
        Your email is{" "}
        <a href={`mailto:${user?.email}`} className="text-blue-500">
          {user?.email}
        </a>
      </p>
      <p>Your account is created at {creationString}</p>
    </div>
  );
};

export default AboutPage;
