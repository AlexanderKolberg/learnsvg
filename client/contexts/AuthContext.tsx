import { onAuthStateChanged, User } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";

interface IAuthContext {
  user: User | null;
}

type Props = {
  children: ReactNode;
};

const AuthContext = React.createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { user: currentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
