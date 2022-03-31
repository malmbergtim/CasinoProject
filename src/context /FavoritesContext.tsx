import { createContext, useState, ReactNode } from "react";


type favorites = {
    id: number;
    slug ? : string;
    name ?: string;
    imageSrc ?: string;
    urlSrc ?: string;
}

type providerProps = {
  children: ReactNode;
};

type contextType = {
  favs: favorites[]
  addFav: React.Dispatch<React.SetStateAction<favorites[]>>
};
export const FavoritesContext = createContext<contextType | null>(null);

export const FavoritesProvider = ({ children }: providerProps) => {
  const [favs, addFav] = useState<favorites[]>([]);
  return (
    <FavoritesContext.Provider value={{ favs, addFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
