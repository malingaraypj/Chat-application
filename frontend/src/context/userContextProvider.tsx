import { useState } from "react";
import { UserContext } from "./userContext";
import type { UserType } from "./userContext";

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({
    username: "",
    email: "",
    status: "offline",
    avatar: undefined,
  });

  const handleSetUser = (user: UserType) => {
    setUser(user);
  };

  const handleClearUser = () => {
    setUser({
      username: "",
      email: "",
      status: "offline",
      avatar: undefined,
    });
  };

  const userCtx = {
    user,
    setUser: handleSetUser,
    clearUser: handleClearUser,
  };
  return (
    <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
