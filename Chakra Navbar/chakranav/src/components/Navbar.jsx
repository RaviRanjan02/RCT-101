import React from "react";
import { Flex, Spacer, Box, Button, Heading, Divider, background } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Flex gap={"5"} margin={"10px"} alignItems={"center"}>
        <Heading size="md">Logo</Heading>
        <Tabs variant={"unstyled"}>
          <TabList >
            <Tab>Inspiration</Tab>
            <Tab>Find Work</Tab>
            <Tab>Learn Design</Tab>
            <Tab>Hire Designers</Tab>
          </TabList>
          <TabPanels>
    <TabPanel width={"300px"} zIndex={"-1"} position={"absolute"}>
    <ul>
      <h3>Explore Design Work</h3>
      <p>Trending design to Inspire you </p>
      </ul>
      <ul>
      <h3>New and NoteWorthy</h3>
      <p>Trending design to Inspire you </p>
      </ul>
    </TabPanel>
    <TabPanel width={"300px"} zIndex={"-1"} position={"absolute"} >
      <ul>
      <h3>Job Board</h3>
      <p>Trending design to Inspire you </p>
      </ul>
      <ul>
      <h3>free Lance Project</h3>
      <p>Trending design to Inspire you </p>
      </ul>
    </TabPanel>
  </TabPanels>
        </Tabs>
        <Spacer />
        <Link color={"blue.500"}>Sign In</Link>
        <Button colorScheme="pink" size="md">
          Sign Up
        </Button>
      </Flex>
      <Divider />
    </div>
  );
};

export default Navbar;
