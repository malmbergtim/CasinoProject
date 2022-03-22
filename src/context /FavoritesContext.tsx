import { createContext, useState, ReactNode } from "react";


type favorites = {
    id: number;
    slug: string;
    name: string;
    imageSrc: string;
    urlSrc: string;
}

type providerProps = {
  children: ReactNode;
};

type contextType = {
  favs: favorites | null
  addFav: React.Dispatch<React.SetStateAction<favorites | null>>
};
export const FavoritesContext = createContext<contextType | null>(null);

export const FavoritesProvider = ({ children }: providerProps) => {
  const [favs, addFav] = useState<favorites | null>(null);
  return (
    <FavoritesContext.Provider value={{ favs, addFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
