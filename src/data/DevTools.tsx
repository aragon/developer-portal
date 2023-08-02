import React from 'react';
import {IWelcomeCardProps} from '../components/WelcomeCard';
import {RocketIcon, PageIcon, InfoIcon} from '../components';

const devTools: IWelcomeCardProps[] = [
  {
    title: 'Quickstart DAO Plugin',
    description: 'Tutorial for building a Non-Upgradeable DAO Plugin.',
    icon: <InfoIcon />,
    linkLabel: 'Get Started Tutorial',
    href: 'https://github.com/aragon/greeter-plugin-tutorial',
  },
  {
    title: 'CLI',
    description: 'A CLI to speed up your plugin development lifecycle.',
    icon: <RocketIcon />,
    linkLabel: 'Dev Tool',
    href: 'https://github.com/aragon/cli',
  },
  {
    title: 'Upgradeable Plugin 101',
    description: 'Tutorial example for building an Upgradeable DAO Plugin.',
    icon: <InfoIcon />,
    linkLabel: 'Code Sample',
    href: 'https://github.com/aragon/simple-storage-example-plugin',
  },
  {
    title: 'Hardhat DAO Plugin',
    description:
      'Use this Hardhat Boilerplate to build any type of DAO Plugin.',
    icon: <PageIcon />,
    linkLabel: 'Plugin Boilerplate',
    href: 'https://github.com/aragon/osx-plugin-template-hardhat',
  },
  {
    title: 'Custom DAO front-end',
    description: 'Use the SDK to visualize your Aragon DAO.',
    icon: <PageIcon />,
    linkLabel: 'Custom DAO with SDK',
    href: 'https://github.com/juliettech13/aragonOSx-sdk-demo',
  },
  {
    title: 'Governance Plugin 101',
    description: 'Build a Governance Plugin for your DAO.',
    icon: <InfoIcon />,
    linkLabel: 'Governance Plugin Tutorial',
    href: 'https://aragon.org/how-to/build-a-dao-plugin-using-aragon-osx',
  },
];

export default devTools;
