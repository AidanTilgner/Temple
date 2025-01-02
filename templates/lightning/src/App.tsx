import "@mantine/core/styles.css";
import {
  Button,
  Center,
  Code,
  Container,
  Flex,
  Space,
  Text,
  Title,
} from "@mantine/core";
import useFetch from "./hooks/useFetch";
import { notifications } from "@mantine/notifications";

export default function App() {
  const { load: getMessage } = useFetch<undefined, string>({
    url: "/hello",
    onSuccess: (data) => {
      notifications.show({
        title: "Message",
        message: data,
      });
    },
  });

  return (
    <Container h={"80vh"}>
      <Flex direction="column" justify="center" h={"100%"}>
        <Center>
          <Title order={1}>Lightning App</Title>
        </Center>
        <Space h="md" />
        <Center>
          <Text>
            Edit this file at <Code>src/App.tsx</Code>
          </Text>
        </Center>
        <Space h="md" />
        <Center>
          <Button
            onClick={() => {
              getMessage();
            }}
          >
            Get message
          </Button>
        </Center>
      </Flex>
    </Container>
  );
}
