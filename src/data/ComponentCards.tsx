import React from 'react';
import {IComponentCardProps} from '../components/ComponentCard';
import {
  IllustrationSdk,
  IllustrationOsx,
  IllustrationSubgraph,
  IllustrationDesignSystem,
} from '../components';

const componentCards: IComponentCardProps[] = [
  {
    title: 'Aragon OSx',
    description:
      'Secure, modular, and lean, the Aragon OSx protocol is your go-to DAO framework for building custom organizations on-chain.',
    img: <IllustrationOsx />,
    to: '/docs/osx',
  },
  {
    title: 'Aragon SDK',
    description:
      'A Software Development Kit designed with dApp builders in mind. Your gateway into the Aragon OSx protocol in pure JS - no Solidity required.',
    img: <IllustrationSdk />,
    to: '/docs/sdk',
  },
  {
    title: 'Aragon Subgraph',
    description:
      'A powerful indexing and querying tool to get information from events emitted by the Aragon OSx contracts. The site is currently under development.',
    img: <IllustrationSubgraph />,
    to: '/docs/subgraph',
    cta: 'Learn More (WiP)',
  },
  {
    title: 'Design System',
    description:
      "Aragon's ODS is a human-centered, open-source design system powering designers and developers alike through a unified, builder-friendly framework.",
    img: <IllustrationDesignSystem />,
    to: 'https://github.com/aragon/apps/tree/develop/packages/ui-components',
    cta: 'Coming soon',
  },
];

export default componentCards;
