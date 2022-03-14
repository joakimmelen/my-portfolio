import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import ProjectsBlock from "../components/blocks/Projects"
import { projectsState } from '../stores/projects/atom';
import { useRecoilValue } from 'recoil';

import AnimatedPage from "../partials/AnimatedPage";

function Home() {

    const projects = useRecoilValue(projectsState);

  return (
    <AnimatedPage>

        <Flex minHeight="60vh" alignItems="center">
            <Stack alignItems="flex-start">

                <Heading>Joakim Melén</Heading>

                <Heading>Frontend & App developer</Heading>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum id provident! Libero minima quidem accusamus dolore laudantium nostrum deleniti, animi tempora accusantium, quam numquam quae non in, nobis sapiente. Qui sunt laboriosam assumenda? Doloribus deleniti qui a facilis quos nemo, eos tenetur voluptatem voluptas hic architecto illum dicta velit?
                </Text>
                <Button as={Link} to="/projects">
                    Check out my projects
                </Button>
            </Stack>
        </Flex>

        <ProjectsBlock projects={projects} />

        </AnimatedPage>
  );
}

export default Home