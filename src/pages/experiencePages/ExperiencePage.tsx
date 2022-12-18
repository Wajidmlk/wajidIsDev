import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import ExperiencePageZero from './experiencePageZero/ExperiencePageZero';

const expData = {
  heading: "Experience",
  data: [
    {
      title: "Full Stack Developer (REMOTE)",
      duration: "03/2022 - Present",
      details: "Web development Software House",
      description: "",
      list: [
        `Job is to convert diagrams into pixel perfect UIs, Creating dynamic
        database queries and writing testable code controlled with nearly all
        possible scenarios`,
        `Key tasks are creating wire-frames, scenarios, task time estimations,
        WBS, making Milestones and applying TDD.`,
        `Due tasks after completing a feature are providing to release notes,
        elaboration video, and get pair review then STO approval.`,
      ],
    },
    {
      title: "Web Developer (Hybrid)",
      duration: "04/2021 - 03/2022",
      details: "Web and Mobile development Software House",
      description: "",
      list: [
        `Adding Features and Bug-fixes in multiple projects.`,
        `Writing test cases, code quality control.`,
        `Agile Meetings, Project Planning and Reviews.`,
      ],
    },
    {
      title: "Trainee - Associate Software Engineer",
      duration: "03/2020 - 04/2021",
      details: "Services and Provider Company",
      description: "",
      list: [
        `Maintaining deployments with Docker.`,
        `Adding features in multiple projects.`,
        `Figma, Postman, XD and PM tool implementations and training..`,
      ],
    },
  ],
};

const ExperiencePage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.pageId){
    case '630d36aa-2aa4-11ed-a261-0242ac121001' :
      pageById = <ExperiencePageZero page={page} {...expData} />
      break;
    default:
      pageById = <ExperiencePageZero page={page} {...expData} />
    break;
  
  }
  return pageById;
};

export default ExperiencePage;
