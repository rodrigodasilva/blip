import { createContext, useCallback, useContext, useState } from "react";

interface ViewProviderProps {
  children: React.ReactNode;
}

type View = "list" | "block";

interface ViewContextProps {
  view: View;
  onViewChange: (option: View) => void;
}

const ViewContext = createContext<ViewContextProps>({} as ViewContextProps);

const STORAGE_KEY = "@blip:view";

export const ViewProvider = ({ children }: ViewProviderProps) => {
  const [view, setView] = useState<View>(() => {
    const storagedView = localStorage.getItem(STORAGE_KEY);

    if (storagedView) {
      return JSON.parse(storagedView);
    }

    return "block";
  });

  const handleViewChange = useCallback((option: View) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(option));
    setView(option);
  }, []);

  return (
    <ViewContext.Provider value={{ view, onViewChange: handleViewChange }}>
      {children}
    </ViewContext.Provider>
  );
};

export default function useView(): ViewContextProps {
  const context = useContext(ViewContext);
  return context;
}
