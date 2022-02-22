import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const Home = () => (
  <main>
    {/* FIXME: Needs to account for header hight */}
    <Center h="100vh">
      <VStack>
        <Heading as="h1" size="4xl">
          Welcome to Learn SVG
        </Heading>
        <Text fontSize="xl">
          Learn SVG is an interactive way to learn to write SVG code
        </Text>
        <Link href="/guide/1" passHref>
          <Button>Start Learning!</Button>
        </Link>
        <HStack spacing={4}>
          <Link href="/login/signup">Sign up</Link>
          <Link href="/login/login">Log in</Link>
        </HStack>
      </VStack>
    </Center>
  </main>
);

export default Home;
