import { createContext, useState, ReactNode } from "react";

type userProviderProps = {
  children: ReactNode;
};

type contextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
export const searchContext = createContext<contextType | null>(null);

export const SearchProvider = ({ children }: userProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <searchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </searchContext.Provider>
  );
};
