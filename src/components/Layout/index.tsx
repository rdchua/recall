import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from "../../constants/layout";

import SideBar from "./Sidebar";
import { useLayout } from "../../context/useLayout";
import useScreen from "../../hooks/useSceen";

type SideBarProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: SideBarProps) => {
  const { isMobile, isTablet, isLargeTablet } = useScreen();
  const { sidebarCollapsed, setSidebarCollapsed } = useLayout();

  useEffect(() => {
    if (isTablet || isLargeTablet) {
      setSidebarCollapsed(true);
    } else {
      setSidebarCollapsed(false);
    }
  }, [isTablet, isLargeTablet]);

  return (
    <>
      {!isMobile && <SideBar />}
      <Box
        paddingLeft={sidebarCollapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
