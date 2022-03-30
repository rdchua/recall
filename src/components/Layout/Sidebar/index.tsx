import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_COLLAPSED,
} from "../../../constants/layout";

import { FiChevronRight } from "react-icons/fi";
import NavItem from "./NavItem";
import React from "react";
import logo from "assets/images/logo.png";
import { useLayout } from "context/useLayout";
import { useLocation } from "react-router-dom";

export type NavItemProps = {
  icon: string;
  text: string;
  path: string;
  divider?: boolean;
  isCollapsed?: boolean;
  active: boolean;
};

const navItems: Partial<NavItemProps>[] = [
  { icon: "RiContrastFill", text: "Content", path: "/" },
  { icon: "", text: "Content", divider: true, path: "/a" },
  { icon: "RiUser2Fill", text: "Users", path: "/users" },
  { icon: "RiGalleryFill", text: "Media Library", path: "/b" },
  { icon: "RiInformationFill", text: "Documentation", path: "/c" },
  { icon: "", text: "General", divider: true, path: "/d" },
  { icon: "RiHandCoinFill", text: "Plugins", path: "/e" },
  { icon: "RiShoppingCart2Fill", text: "Marketplace", path: "/f" },
  { icon: "RiSettings5Fill", text: "Settings", path: "/g" },
];

const SideBar = () => {
  const { sidebarCollapsed, toggleSidebar } = useLayout();
  const { pathname } = useLocation();
  return (
    <Box
      w={sidebarCollapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}
      h="100vh"
      bg="#F5F6F6"
      borderRight="1px solid var(--chakra-colors-neutral-150)"
      transition="all 0.2s ease"
      position="fixed"
      zIndex={1000}
    >
      <Flex
        px={4}
        py={5}
        alignItems="center"
        borderBottom="1px solid var(--chakra-colors-neutral-150)"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="primary.600"
          borderRadius={4}
          w={10}
          h={10}
        >
          <Image w={5} h={5} src={logo} />
        </Flex>
        {!sidebarCollapsed && (
          <Box h="45px" ml={2}>
            <Text color="neutral.800" fontWeight={700}>
              Strapi Website
            </Text>
            <Text color="neutral.800" fontSize="sm">
              Workplace
            </Text>
          </Box>
        )}
      </Flex>
      <VStack p={4}>
        {navItems.map((item: any, i) => (
          <NavItem
            active={pathname === item.path}
            isCollapsed={sidebarCollapsed}
            key={i}
            {...item}
          />
        ))}
      </VStack>
      <Box
        p={3}
        borderTop="1px solid var(--chakra-colors-neutral-150)"
        position="absolute"
        bottom="0"
        w="100%"
      >
        <Flex alignItems="center" px={3} py={2}>
          <Avatar src="" size="sm" />
          {!sidebarCollapsed && (
            <Box ml={4}>
              <Text>Kai Doe</Text>
            </Box>
          )}
          <IconButton
            bg="white"
            minW="18px"
            h="25px"
            position="absolute"
            right={sidebarCollapsed ? "-8px" : "24px"}
            top="24px"
            borderRadius={2}
            border="1px solid #EAEAEF"
            aria-label="toggle"
            transition="transform .2s ease"
            icon={
              <FiChevronRight
                transform={sidebarCollapsed ? "rotate(0) " : "rotate(180)"}
              />
            }
            onClick={() => toggleSidebar()}
          >
            Collapse
          </IconButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideBar;
