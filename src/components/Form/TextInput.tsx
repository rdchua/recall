import { Flex, FlexProps, FormLabel, Input, Text } from "@chakra-ui/react";

interface InputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  description?: string;
  containerProps?: FlexProps;
  isFullWidth?: boolean;
  wrapperProps?: FlexProps;
}

const TextInput = ({
  label,
  description,
  containerProps,
  wrapperProps,
  isFullWidth = false,
  ...rest
}: InputProps) => {
  return (
    <Flex
      direction="column"
      w={isFullWidth ? "100%" : "initial"}
      mb={6}
      {...wrapperProps}
    >
      {label && (
        <FormLabel mb={1} fontSize="sm" fontWeight={700}>
          {label}
        </FormLabel>
      )}
      <Flex
        alignItems="center"
        p="10px 16px"
        bg={rest.disabled ? "neutral.150" : "white"}
        fontSize="sm"
        borderRadius={4}
        borderWidth={1}
        borderColor="neutral.200"
        _focusWithin={{
          borderColor: "primary.600",
        }}
        color="neutral.800"
        {...containerProps}
      >
        <Input
          p={0}
          m={0}
          h="100%"
          border="none"
          borderRadius={0}
          fontSize="sm"
          _placeholder={{
            fontSize: "sm",
            color: "neutral.800",
          }}
          _disabled={{ color: "neutral.600" }}
          _focus={{ outline: "none" }}
          {...rest}
        />
      </Flex>
      {description && (
        <Text mt={1} color="neutral.600" fontSize="sm" lineHeight={4}>
          {description}
        </Text>
      )}
    </Flex>
  );
};

export default TextInput;
