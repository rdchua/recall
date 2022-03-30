import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import tasksAPI from "api/tasks";
import TextInput from "components/Form/TextInput";
import Page from "components/Layout/Page";
import PageHeader from "components/PageHeader";
import RightPanel from "components/RightPanel";
import { Task } from "components/TaskItem";
import TaskList from "components/TaskList";
import { TaskProvider } from "context/useTask";
import { useDebounce } from "hooks/useDebounce";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, loading } = useFetch(tasksAPI.fetch, "tasks");
  const [tasks, setTasks] = useState<Task[]>(data || null);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchTasks = async () => {
      if (query !== "") {
        const { tasks } = await tasksAPI.searchTask({ query: debouncedQuery });
        setTasks(tasks);
      } else {
        console.log(data);
        setTasks(data);
      }
    };
    fetchTasks();
  }, [debouncedQuery, data]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  if (loading) {
    return null;
  }

  return (
    <TaskProvider>
      <Grid gridTemplateColumns="70% 1fr" gridColumnGap={0}>
        <Page>
          <PageHeader title="Tasks" />
          <Box w="100%">
            <Flex direction="row" mb={2} alignItems="center">
              <Text
                flex="1"
                fontSize="header.2"
                fontWeight={500}
                color="primary.700"
              >
                Task List
              </Text>
              <TextInput
                containerProps={{ w: 200 }}
                wrapperProps={{ mb: 0 }}
                placeholder="Search tasks..."
                _placeholder={{
                  color: "neutral.400",
                }}
                onChange={handleSearch}
              />
            </Flex>
            <TaskList tasks={tasks} />
          </Box>
        </Page>
        <RightPanel />
      </Grid>
    </TaskProvider>
  );
};

export default Home;
