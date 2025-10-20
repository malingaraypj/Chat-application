import { createContext } from "react";

export interface UserType {
  _id: string;
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
    _id: "",
    username: "",
    email: "",
    status: "offline",
    avatar: undefined,
  },
  clearUser: () => {},
  setUser: () => {},
});
