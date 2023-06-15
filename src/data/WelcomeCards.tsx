import React from 'react';
import {IWelcomeCardProps} from '../components/WelcomeCard';
import {RocketIcon, PageIcon, InfoIcon} from '../components';

const welcomeCards: IWelcomeCardProps[] = [
  {
    title: 'Get Started',
    description: 'Customize your DAO through building a DAO plugin or integrating OSx into your dApp',
    icon: <RocketIcon />,
    linkLabel: 'Start Building',
    href: '/docs/getting-started',
  },
  {
    title: 'Browse Use Cases',
    description:
      'Check out how developers are leveraging Aragon OSx for their projects',
    icon: <InfoIcon />,
    linkLabel: 'Aragon Projects Directory',
    href: 'https://www.notion.so/aragonorg/Aragon-Ecosystem-Projects-36c3cfd85c3d43f0b8bebb0e2811c298?pvs=4',
  },
  {
    title: 'Join our Developer Community',
    description:
      'Keep up to date on the latest product releases and learn about working with Aragon',
    icon: <PageIcon />,
    linkLabel: 'Join here',
    href: 'https://aragonproject.typeform.com/to/LngekEhU',
  },
];

export default welcomeCards;
