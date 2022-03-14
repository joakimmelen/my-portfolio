import React from 'react'
import { useParams } from "react-router-dom";
import { projectsState } from "./../stores/projects/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from '../partials/AnimatedPage';
import { Heading, Text } from '@chakra-ui/react';

function SingleProject() {
  const params = useParams();
  const projects = useRecoilValue(projectsState);

  const project = projects.find(project => project.id === parseInt(params.projectId))

  return (
    <AnimatedPage>
        <Heading>{project.title}</Heading>
        <Text>{project.description}</Text>
        </AnimatedPage>
  )
}

export default SingleProject