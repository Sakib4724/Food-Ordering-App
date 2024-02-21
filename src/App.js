import React, { useState } from "react";
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import { LoggedInUserProvider } from "./utils/LoggedInUserContext";

const AppLayout = () => {
  const [user, setUser] = useState({
    email: "sak24@gmail.com",
    password: "fsgsfs"
  });

  return (
    <Provider store={store}>      {/* redux provider */}

      {/* <UserContext.Provider value={{
        user: user,
        setUser: setUser
      }}> */}
        
        <Header />

        <Outlet />
        {/* <About />  //if path is '/about'
      <Body />  //if path is '/'
      <Contact /> //if path is '/contact' */}
        <Footer />

      {/* </UserContext.Provider> */}

    </Provider>
  );
};

export default AppLayout;
