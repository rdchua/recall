import {
  Box,
  Center,
  Divider,
  Fade,
  Flex,
  Grid,
  HStack,
  Image,
  Progress,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import marketImage from "assets/images/illustrations/select.png";
import { useTask } from "context/useTask";
import Card from "./Card";
import Checkbox from "./Form/Checkbox";
import TextInput from "./Form/TextInput";
import Tag from "./Tag";
import { Task } from "./TaskItem";

const EmptyPanel = () => (
  <Center flexDirection="column" w="100%" h="100%">
    <Image src={marketImage} w="50%" h="auto" />
    <Text color="neutral.400" mt={4}>
      Select a task to view its details
    </Text>
  </Center>
);

interface IPanel {
  task: Task;
}

const Panel = ({ task }: IPanel) => {
  const stats = [
    { title: "Subtasks", value: "13" },
    { title: "Finished", value: "3" },
    { title: "Time Left", value: "18h 9m" },
  ];
  return (
    <SlideFade offsetY="40px" in={true}>
      <Box>
        <HStack
          spacing={4}
          px={6}
          py={4}
          direction="row"
          alignItems="center"
          borderBottomWidth={1}
          borderColor="neutral.100"
        >
          <Checkbox checked={task.checked} />
          <Box h="25px" width="2px" bg="neutral.100"></Box>
          <TextInput
            as="textarea"
            resize="none"
            containerProps={{
              borderWidth: "0",
              p: 0,
            }}
            value={task.title}
            color="neutral.800"
            fontWeight={700}
            fontSize="lg"
            isFullWidth
          />
        </HStack>
        <Box px={6} py={4} mt={4}>
          <Text fontSize="sm" color="neutral.500" mb={2}>
            Created
          </Text>
          <Text mb={8}>March 18, 2022</Text>

          <Text fontSize="sm" color="neutral.500" mb={2}>
            Categories
          </Text>
          <HStack mb={8}>
            <Tag color="danger">Test</Tag>
            <Tag color="warning">Design</Tag>
            <Tag color="success">Design System</Tag>
          </HStack>

          <Text fontSize="sm" color="neutral.500" mb={2}>
            Notes
          </Text>
          <VStack spacing={2}>
            <Card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              suscipit soluta, reprehenderit cupiditate molestias unde sit!
              Aspernatur laudantium totam.
            </Card>
            <Card>
              Vero asperiores eius rerum nisi illum iste amet. Animi quae vel in
              nostrum odit inventore alias placeat?
            </Card>
            <Card>
              Dolore dolor voluptas libero necessitatibus non fugit! Atque?
            </Card>
          </VStack>
        </Box>
      </Box>
    </SlideFade>
  );
};

const RightPanel = () => {
  const { selectedTask } = useTask();
  return (
    <Box borderLeftWidth={1} borderColor="neutral.100" w="100%">
      {selectedTask ? <Panel task={selectedTask} /> : <EmptyPanel />}
    </Box>
  );
};

export default RightPanel;
