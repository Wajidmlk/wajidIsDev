import React from 'react';
import { tpPageStructure } from '../../common/commonTypes';
import ExperiencePageZero from './experiencePageZero/ExperiencePageZero';

const expData = [
  {
    heading: "Summary",
    data: [
      {
        title: "Malik Wajid",
        duration: "",
        details: "Freelancer & Full-time Programmer",
        description: `An experienced programer proficient in programming practices. Loves to gather correct requirements, plans and
        select best solution before start coding. Hyper sensitive to pixel perfect UI designing; Develops reliable, testable and
        efficient back-end code independent of Front-end. - 1000+ contributions this year(github)`,
        list: [
          'DHA, Karachi, Pakistan',
          '16 July, 1997',
        ]
      },
    ],
  },
  {
    heading: "Education",
    data: [
      {
        title: "Bachelor's in Software Engineering",
        organization: "ISRA University",
        duration: "01/2017 - 12/2020",
      },
      {
        title: "Certificate of Proficiency  in ISM",
        organization: "APTECH Learning",
        duration: "12/2018 - 06/2019",
      },
    ],
  },
  {
    heading: "Mega Jobs",
    data: [
      {
        title: "Itg-vSRM - Virtual Supplier Relationship Management",
        duration: "05/2022 - Present",
        organization: "CQ Technologies",
        details: "Business Systems for turkish & UK client",
      },
      {
        title: "First Key Homes - e-commerce house selling webapp",
        duration: "06/2021 - 12/2021",
        organization: "RIKSOF",
        details: "Online housing website for USA client",
      },
      {
        title: "Karachi Grammar School (KGS) School System",
        duration: "10/2021 - 03/2022",
        organization: "RIKSOF",
        details: "School automation model. Rich functionalities like Lambdas, Cron jobs, Schedulers and printers. etc",
      },
      {
        title: "Katshing - Telecommunication Solution",
        duration: "12/2021 - 03/2022",
        organization: "RIKSOF",
        details: "Telecommunication facilitator services for European Countries",
      },
      {
        title: "Jardine-AI ( Expert System ) - FYP",
        duration: "01/2020 - 11/2020",
        organization: "Final Year Project in University (Isra)",
        details: `Awarded with first position across Pakistan by Pasha software house
        association, It is an AI app based on cricket, which clones the behavior of
        batsman and predicts with accuracy of 90%. app contains high class
        simulators and result displays in charts and figures -
        <LINK-https://www.facebook.com/JardineAI-LINK>`,
      },
    ],
  },
  {
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
  },
];

const ExperiencePage = ({page}: {page: tpPageStructure}) => {
  let pageById: JSX.Element = <></>;
  switch(page.pageId){
    case '630d36aa-2aa4-11ed-a261-0242ac121001' :
      pageById = <ExperiencePageZero page={page} state={expData} />
      break;
    default:
      pageById = <ExperiencePageZero page={page} state={expData} />
    break;
  
  }
  return pageById;
};

export default ExperiencePage;
