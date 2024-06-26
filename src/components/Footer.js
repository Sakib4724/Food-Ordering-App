import { useContext } from "react";
import UserContext from "../utils/UserContext";
import React from "react";
import { LoggedInUserContext } from "../utils/LoggedInUserContext";

const Footer = () => {
  // const {user} = useContext(UserContext);
  const loggedInUserContext = useContext(LoggedInUserContext);

  return (
    <footer className="fixed bottom-0 w-full bg-yellow-100 p-4 text-center">
      <h4 className="text-gray-800 font-pop2 font-medium">
        This site is developed by Sakib Shaikh !
      </h4>
    </footer>
  );
};

export default Footer;
