import { Box, Flex, Text } from "@chakra-ui/react";

import React from "react";
import { FiPlus } from "react-icons/fi";
import Button from "./Button";

interface IProps extends React.ComponentProps<typeof Flex> {
  title: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: string;
  onClick?: () => void;
  actionRenderer?: React.ReactNode;
}

const PageHeader = ({
  title,
  description,
  buttonText,
  onClick,
  actionRenderer,
  ...props
}: IProps) => {
  return (
    <Flex alignItems="center" mb={6} {...props}>
      <Box flex="1">
        <Text fontSize="header.1" fontWeight={700} color="primary.700">
          {title}
        </Text>
        <Text fontSize="subtitle" color="neutral.600">
          {description}
        </Text>
      </Box>
      {buttonText && (
        <Button leftIcon={<FiPlus strokeWidth={2.5} />} onClick={onClick}>
          {buttonText}
        </Button>
      )}
      {actionRenderer && actionRenderer}
    </Flex>
  );
};

export default PageHeader;
