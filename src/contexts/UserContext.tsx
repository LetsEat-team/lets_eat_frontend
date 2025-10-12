import { createContext, useContext, useState, type ReactNode } from "react";

interface UserContextType {
  user: string | null;         // 현재 로그인된 유저 (예: "seowon")
  isOwner: boolean;            // 그룹 owner인지 여부
  setUser: (user: string | null) => void;
  setIsOwner: (isOwner: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState(false);

  return (
    <UserContext.Provider value={{ user, isOwner, setUser, setIsOwner }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
