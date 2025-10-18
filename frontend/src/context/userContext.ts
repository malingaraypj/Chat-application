import { createContext } from "react";

export interface UserType {
  username: string;
  email: string;
  status: "online" | "offline";
  avatar?: string;
}

interface UserContextType {
  user: UserType;
  setUser: (user: UserType) => void;
  clearUser: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: {
    username: "",
    email: "",
    status: "offline",
    avatar: undefined,
  },
  clearUser: () => {},
  setUser: () => {},
});
