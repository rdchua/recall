import { createContext, useContext, useMemo, useState } from "react";

import useScreen from "../hooks/useSceen";

interface ILayoutContext {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: any;
}

//@ts-ignore
export const LayoutContext = createContext<ILayoutContext>({});

export const useLayout = () => {
  return useContext(LayoutContext);
};

export function LayoutProvider({ children }: any) {
  const { isTablet, isLargeTablet } = useScreen();
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(
    isTablet || isLargeTablet ? true : false
  );

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const providerValue = useMemo(
    () => ({
      sidebarCollapsed,
      setSidebarCollapsed,
      toggleSidebar,
    }),
    [sidebarCollapsed]
  );

  return (
    <LayoutContext.Provider value={providerValue}>
      {children}
    </LayoutContext.Provider>
  );
}
