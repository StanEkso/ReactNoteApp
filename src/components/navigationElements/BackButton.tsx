import React, { memo } from "react";
import { Link } from "react-router-dom";

const BackButton = () => (
  <Link
    to={"../"}
    className="bg-blue-500 text-white text-center py-1 px-2 flex max-w-[100px] cursor-pointer"
  >
    {"<-"} Back
  </Link>
);

export default memo(BackButton);
