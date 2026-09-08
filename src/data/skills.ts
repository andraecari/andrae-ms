import pythonIcon from "../assets/skills/python.png";
import sqlIcon from "../assets/skills/sql.png";
import elixirIcon from "../assets/skills/elixir.png";
import typescriptIcon from "../assets/skills/typescript.png";
import javascriptIcon from "../assets/skills/javascript.png";
import javaIcon from "../assets/skills/java.png";
import cppIcon from "../assets/skills/cpp.png";
import cIcon from "../assets/skills/c.png";
import phpIcon from "../assets/skills/php.png";
import perlIcon from "../assets/skills/perl.png";

import reactIcon from "../assets/skills/react.png";
import flaskIcon from "../assets/skills/flask.png";
import graphqlIcon from "../assets/skills/graphql.png";
import postgresqlIcon from "../assets/skills/postgresql.png";
import fastapiIcon from "../assets/skills/fastapi.png";
import phoenixIcon from "../assets/skills/phoenix.png";
import redisIcon from "../assets/skills/redis.png";
import kafkaIcon from "../assets/skills/kafka.png";
import nodejsIcon from "../assets/skills/nodejs.png";
import seleniumIcon from "../assets/skills/selenium.png";
import tensorflowIcon from "../assets/skills/tensorflow.png";

import dockerIcon from "../assets/skills/docker.png";
import kubernetesIcon from "../assets/skills/kubernetes.png";
import awsIcon from "../assets/skills/aws.png";
import gitIcon from "../assets/skills/git.png";
import githubIcon from "../assets/skills/github.png";
import argocdIcon from "../assets/skills/argocd.png";
import circleciIcon from "../assets/skills/circleci.png";
import datadogIcon from "../assets/skills/datadog.png";
import bugsnagIcon from "../assets/skills/bugsnag.png";
import launchdarklyIcon from "../assets/skills/launchdarkly.png";
import linuxIcon from "../assets/skills/linux.png";
import nginxIcon from "../assets/skills/nginx.png";
import claudeIcon from "../assets/skills/claude.png";
import oracleIcon from "../assets/skills/oracle.png";
import jiraIcon from "../assets/skills/jira.png";
import postmanIcon from "../assets/skills/postman.png"

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "SQL", icon: sqlIcon },
      { name: "Elixir", icon: elixirIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Java", icon: javaIcon },
      { name: "C++", icon: cppIcon },
      { name: "C", icon: cIcon },
      { name: "PHP", icon: phpIcon },
      { name: "Perl", icon: perlIcon },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "GraphQL", icon: graphqlIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Phoenix", icon: phoenixIcon },
      { name: "Redis", icon: redisIcon },
      { name: "Kafka", icon: kafkaIcon },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Selenium", icon: seleniumIcon },
      { name: "TensorFlow", icon: tensorflowIcon },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "AWS", icon: awsIcon },
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "ArgoCD", icon: argocdIcon },
      { name: "CircleCI", icon: circleciIcon },
      { name: "Datadog", icon: datadogIcon },
      { name: "Bugsnag", icon: bugsnagIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "LaunchDarkly", icon: launchdarklyIcon },
      { name: "Linux", icon: linuxIcon },
      { name: "Nginx", icon: nginxIcon },
      { name: "Claude Code", icon: claudeIcon },
      { name: "Oracle", icon: oracleIcon },
      { name: "Jira", icon: jiraIcon },
    ],
  },
];