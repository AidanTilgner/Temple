import {
  Button,
  Code,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  List,
  Text,
  Title,
} from "@mantine/core";
import useFetch from "../hooks/useFetch";
import { notifications } from "@mantine/notifications";
import { Log } from "../../app/database/models/log";
import { Link } from "react-router";

export default function Home() {
  const { load: getMessage } = useFetch<undefined, string>({
    url: "/hello",
    onSuccess: (data) => {
      notifications.show({
        title: "Message",
        message: data,
        autoClose: false,
      });
    },
  });

  const { data: logs } = useFetch<undefined, Log[]>({
    url: "/logs",
    runOnMount: true,
  });

  return (
    <Container h={"80vh"}>
      <Flex direction="column" justify="center" h={"100%"}>
        <Grid>
          <Grid.Col span={12}>
            <Title order={1}>Lightning App</Title>
          </Grid.Col>
          <Grid.Col span={12} />
          <Grid.Col span={12}>
            <Text>
              Edit this file at <Code>src/App.tsx</Code>
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group gap="md">
              <Button
                onClick={() => {
                  getMessage();
                }}
              >
                Get message
              </Button>
              <Link to="/second">
                <Button variant="outline">Second page</Button>
              </Link>
            </Group>
          </Grid.Col>
          <Grid.Col span={12}>
            <Divider h="md" my="md" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Title>Logs</Title>
          </Grid.Col>
          <Grid.Col span={12}>
            <List>
              {logs &&
                logs.map((l) => {
                  return (
                    <List.Item key={l.id}>
                      {new Date(l.createdAt).toDateString()} | {l.message}
                    </List.Item>
                  );
                })}
            </List>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
}
