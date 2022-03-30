import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps extends React.ComponentProps<typeof Box> {
  children: React.ReactNode;
  color: string;
}

const Tag = ({ children, color, ...props }: IProps) => {
  return (
    <Box
      borderColor={`${color}.border`}
      borderWidth={2}
      borderRadius={6}
      px={2}
      py="3px"
      display="inline-block"
      {...props}
    >
      <Flex alignItems="center">
        <Box w="8px" h="8px" borderWidth={2} borderColor={`${color}.500`}></Box>
        <Text fontWeight={500} ml={1} fontSize="sm" lineHeight="24px">
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

export default Tag;
