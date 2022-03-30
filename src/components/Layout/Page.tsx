import { Box, Text } from "@chakra-ui/react";

import React from "react";

interface IProps extends React.ComponentProps<typeof Box> {
  children: React.ReactNode;
}

const Page = ({ children, ...props }: IProps) => {
  return (
    <Box px={14} py={9} bg="white" overflowY="auto" minH="100vh" {...props}>
      {children}
    </Box>
  );
};

export default Page;
