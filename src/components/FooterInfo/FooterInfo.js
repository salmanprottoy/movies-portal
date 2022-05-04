import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterInfo = () => {
  return (
    <div className="p-3">
      &copy; {new Date().getFullYear()} Developed by{" "}
      <a href="https://github.com/salmanprottoy">
        {" "}
        <FontAwesomeIcon /> Salman Prottoy{" "}
      </a>
      {"."} All Rights Reserved.
    </div>
  );
};

export default FooterInfo;
