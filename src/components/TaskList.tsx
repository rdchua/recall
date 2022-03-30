import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import tasksAPI from "api/tasks";
import { useTask } from "context/useTask";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/ri";
import { AddTaskInput } from "./AddTaskInput";
import TaskItem, { Task } from "./TaskItem";

const list = [
  { title: "Overdue", icon: "RiLoader4Fill" },
  { title: "In Progress", icon: "RiLoader4Fill" },
  { title: "In Review", icon: "RiFocus2Line" },
  { title: "Completed", icon: "RiCheckboxCircleFill" },
];

interface IProps {
  tasks: Task[];
}

const TaskList = ({ tasks = [] }: IProps) => {
  const { setSelectedTask } = useTask();
  const [activeList, setActiveList] = useState<number[]>([0]);
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);

  const handleOnChange = (active: number[]) => {
    setActiveList(active);
  };

  const handleSubmit = async (values: any) => {
    const { upsertTask } = await tasksAPI.createTask(values);
    tasks.push(upsertTask);
  };

  const isActive = (index: number) => {
    return activeList.includes(index);
  };

  const handleSelectTask = (task: Task) => {
    task.checked = !task.checked;
    if (task.checked) {
      setSelectedTasks([...selectedTasks, task]);
    } else {
      setSelectedTasks(selectedTasks.filter((task) => task.checked === true));
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Accordion allowMultiple defaultIndex={[1]} onChange={handleOnChange}>
      {list.map(({ title, icon }, index) => {
        // @ts-ignore
        const Icon = Icons[icon];
        const active = isActive(index);
        return (
          <AccordionItem key={index} border="0">
            <AccordionButton pl="0" _focus={{ outline: "none" }}>
              <Flex flex="1" alignItems="center" color="#4F4F4F">
                <Icon fontSize="18px" color={active ? "#32324D" : "#8E8EA9"} />
                <Text
                  lineHeight={0}
                  fontSize="sm"
                  ml={2}
                  textAlign="left"
                  color={active ? "neutral.800" : "neutral.500"}
                >
                  {title}
                </Text>
                <Tag
                  fontWeight={700}
                  bg={active ? "#4F4F4F" : "#EAEAEA"}
                  color={active ? "white" : "neutral.400"}
                  fontSize="xs"
                  minH="0"
                  minW="0"
                  py="2px"
                  px="6px"
                  ml={1}
                >
                  3
                </Tag>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={0} pb={4}>
              <form onSubmit={formik.handleSubmit}>
                <AddTaskInput
                  type="text"
                  name="title"
                  placeholder={`Add task to ${title}`}
                  _placeholder={{ color: "primary.500" }}
                  value={formik.values.title}
                  handleChange={formik.handleChange}
                />
              </form>
              <VStack>
                {tasks &&
                  tasks.map((task: Task) => (
                    <TaskItem
                      isSelectable
                      title={task.title}
                      checked={task.checked}
                      onSelect={() => handleSelectTask(task)}
                      onClick={() => setSelectedTask(task)}
                    />
                  ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default TaskList;
