import { createContext, useContext, useState, ReactNode } from "react";

interface BackgroundContextType {
  bgColor: string;
  textColor: string;
  setBgColor: (color: string) => void;
  setTextColor: (color: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground deve ser usado dentro de BackgroundProvider");
  }
  return context;
}

interface BackgroundProviderProps {
  children: ReactNode;
}

export function BackgroundProvider({ children }: BackgroundProviderProps) {
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  return (
    <BackgroundContext.Provider value={{ bgColor, textColor, setBgColor, setTextColor }}>
      {children}
    </BackgroundContext.Provider>
  );
}
