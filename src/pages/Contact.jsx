import React from "react";
import {
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import AnimatedPage from "../partials/AnimatedPage";

const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 50, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } },
  };

function Contact() {
  return (
    <AnimatedPage>
      <Flex minHeight="60vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Get in touch</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            sunt blanditiis hic mollitia quisquam rerum porro a ullam quos,
            recusandae similique, quam minima esse, reprehenderit provident
            molestiae sapiente? Magni, a.
          </Text>
          <Button as="a" href="mailto:jcrooge@gmail.com">
            jcrooge@gmail.com
          </Button>
        </Stack>
      </Flex>
      </AnimatedPage>
  );
}

export default Contact;
