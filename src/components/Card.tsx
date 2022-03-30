import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";

interface IProps extends BoxProps {
  title?: string;
  custom?: boolean;
  children: React.ReactNode;
}

const Card = ({ title, children, ...props }: IProps) => {
  return (
    <Box
      p={3}
      bg="white"
      borderRadius={8}
      border="1px solid #E2E4E7"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
