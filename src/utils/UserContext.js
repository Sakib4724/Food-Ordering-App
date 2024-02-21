import { createContext } from "react";

const UserContext = createContext({
  user: {
    email: "dummy",
    password: "123445",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
