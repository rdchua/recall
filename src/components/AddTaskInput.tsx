import { Input } from "@chakra-ui/react";

export const AddTaskInput = ({
  ...props
}: React.ComponentProps<typeof Input>) => {
  return (
    <Input
      bg="transparent"
      borderWidth={1}
      borderColor="#cce6e4"
      color="primary.500"
      borderRadius={6}
      w="100%"
      justifyContent="flex-start"
      alignItems="center"
      fontSize="sm"
      mb={2}
      onChange={props.handleChange}
      {...props}
    />
  );
};
