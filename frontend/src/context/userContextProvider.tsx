import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import type { UserType } from "./userContext";

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const [user, setUser] = useState<UserType>({
    _id: "",
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
      _id: "",
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
