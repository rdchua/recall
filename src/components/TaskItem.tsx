import { Box, Flex, SlideFade, Text } from "@chakra-ui/react";
import { useTask } from "context/useTask";
import React from "react";
import Checkbox from "./Form/Checkbox";

export interface Task {
  children?: React.ReactNode;
  isSelectable?: boolean;
  title: string;
  description?: string;
  onSelect?: () => void;
  onClick?: () => void;
  checked?: boolean;
}

const TaskItem = ({
  children,
  isSelectable,
  title,
  checked,
  onSelect,
  onClick,
  ...props
}: Task) => {
  return (
    <SlideFade in={true} offsetY="20px" style={{ width: "100%" }}>
      <Box
        p={3}
        bg="white"
        borderRadius={8}
        border="1px solid #E2E4E7"
        w="100%"
        py={5}
        px={4}
        onClick={onClick}
        {...props}
      >
        <Flex direction="row" alignItems="flex-start">
          {isSelectable && (
            <Checkbox
              onClick={onSelect}
              checked={checked}
              colorScheme="primary"
              style={{ marginRight: 10, marginTop: 2 }}
            ></Checkbox>
          )}
          <Box>
            <Text fontWeight={500}>{title}</Text>
            <Text mt={2} color="neutral.500" fontWeight={400} fontSize="sm">
              Kevin Smithson - 8 Sep, 2022
            </Text>
          </Box>
        </Flex>
        {children && children}
      </Box>
    </SlideFade>
  );
};

export default TaskItem;
