import {
  Box,
  Divider,
  Flex,
  Text,
  type DividerProps,
  type TextProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { NavItemProps } from ".";

const MotionText = motion<TextProps>(Text);
const MotionDivider = motion<DividerProps>(Divider);

const NavItem = ({
  icon,
  text,
  path,
  active,
  divider = false,
  isCollapsed,
}: NavItemProps) => {
  // @ts-ignore
  const Icon = Icons[icon];
  const navigate = useNavigate();
  let styles;
  if (active) {
    styles = {
      bg: "primary.100",
      color: "primary.600",
      fontWeight: 700,
    };
  } else {
    styles = {
      color: "neutral.600",
      bg: "transparent",
    };
  }
  return (
    <Flex
      w="100%"
      direction="row"
      px={3}
      py={2}
      alignItems="center"
      justifyContent="flex-start"
      transition="all .4s ease"
      data-group="nav-item"
      borderRadius={4}
      _hover={{
        cursor: !divider ? "pointer" : "default",
        color: !divider ? "primary.600" : "neutral.400",
        bg: !divider ? "primary.100" : "none",
        transition: "all .2s ease",
      }}
      onClick={() => navigate(path || "")}
      {...styles}
    >
      {icon !== "" && (
        <Box
          data-group="nav-item"
          color={active ? "primary.600" : "neutral.400"}
          _groupHover={{
            color: "primary.600",
          }}
        >
          <Icon fontSize={20} />
        </Box>
      )}
      {isCollapsed && divider && <MotionDivider py={1} />}
      {!isCollapsed && (
        <MotionText
          ml={icon === "" ? 0 : 2}
          fontSize={divider ? "sm" : "md"}
          fontWeight={divider || active ? "500" : "400"}
          data-group="nav-item"
        >
          {text}
        </MotionText>
      )}
    </Flex>
  );
};

export default NavItem;
