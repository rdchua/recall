import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

interface IProps extends React.ComponentProps<typeof ChakraButton> {}

const Button = ({ children, ...props }: IProps) => {
  return (
    <ChakraButton
      px={4}
      borderRadius={4}
      h="36px"
      fontSize="sm"
      bg="primary.600"
      color="white"
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
