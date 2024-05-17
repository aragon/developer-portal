import React from 'react';
import {IWelcomeCardProps} from '../components/WelcomeCard';
import {RocketIcon, PageIcon, InfoIcon} from '../components';

const welcomeCards: IWelcomeCardProps[] = [
  {
    title: 'Join our Developer Community',
    description:
      'Keep up to date on the latest product releases and learn about working with Aragon',
    icon: <PageIcon />,
    linkLabel: 'Join here',
    href: 'https://aragondevelopers.substack.com/',
  },
];

export default welcomeCards;
