import * as Icons from "react-icons/ri";

import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { SUBNAV_WIDTH } from "constants/layout";

const SubNav = ({ navItems }: any) => {
  return (
    <Box
      w={SUBNAV_WIDTH}
      bg="neutral.100"
      borderRightWidth={1}
      borderRightColor="rgba(220, 220, 228, 0.7)"
      h="100vh"
      position="fixed"
      top="0"
      py={6}
      mx={-14}
    >
      <Flex px={5} direction="column" justifyContent="flex-start">
        <Text fontSize="xl" fontWeight={700}>
          Settings
        </Text>
        <Divider
          borderColor="neutral.200"
          mt={6}
          borderWidth={1}
          width="25px"
        />
      </Flex>
      <Box mt={2} w="100%">
        {navItems.map(({ icon, text, divider }: any) => {
          //@ts-ignore
          const Icon = Icons[icon];
          if (divider) {
            return (
              <Text
                key={text}
                fontSize="xs"
                letterSpacing={0.5}
                fontWeight={700}
                color="neutral.600"
                textTransform="uppercase"
                textAlign="left"
                w="100%"
                px={5}
                mb={3}
                mt={6}
              >
                {text}
              </Text>
            );
          }
          return (
            <HStack
              key={text}
              px={5}
              py={2}
              justifyContent="flex-start"
              w="100%"
            >
              <Icon color="var(--chakra-colors-neutral-600)" />
              <Text>{text}</Text>
            </HStack>
          );
        })}
      </Box>
    </Box>
  );
};

export default SubNav;
