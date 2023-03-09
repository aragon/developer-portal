import React, {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ComponentCard} from '../components/ComponentCard';
import styled from 'styled-components';
import {
  // WelcomeCard,
  HeroHeader,
  IllustrationSdk,
  IllustrationOsx,
  IllustrationDesignSystem,
} from '../components';
// import {IconInfo} from '@aragon/ui-components';

type ComponentCard = {
  title: string;
  descritpion: string;
  img: ReactNode;
  to: string;
  cta?: string;
};

const componentCards: ComponentCard[] = [
  {
    title: 'Aragon OSx',
    descritpion:
      'Secure, modular, and lean, the Aragon OSx protocol is your go-to DAO framework for building custom organizations on-chain.',
    img: <IllustrationOsx />,
    to: '/docs/osx',
  },
  {
    title: 'Aragon SDK',
    descritpion:
      'A Software Development Kit designed with dApp builders in mind. Your gateway into the Aragon OSx protocol in pure JS - no Solidity required.',
    img: <IllustrationSdk />,
    to: '/docs/sdk',
  },
  {
    title: 'Design System',
    descritpion:
      "Aragon's ODS is a human-centered, open-source design system powering designers and developers alike through a unified, builder-friendly framework.",
    img: <IllustrationDesignSystem />,
    to: 'https://github.com/aragon/apps/tree/develop/packages/ui-components',
    cta: 'Coming soon',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <HeroHeader
          title="Welcome to our Docs"
          subtitle="Here you'll find guides, resources, and references to build with the Aragon stack"
          img={require('@site/static/img/welcome-image.png').default}
        />
        {/* <WelcomeCardsWrapper>
          {welcomeCards.map((card, index) => (
            <WelcomeCard
              key={index}
              title={card.title}
              description={card.descritpion}
              icon={card.icon}
              href={card.href}
              linkLabel={card.linkLabel}
            />
          ))}
        </WelcomeCardsWrapper> */}
        <ComponentCardsWrapper>
          <ComponentCardsTitle>Explore Products</ComponentCardsTitle>
          {componentCards.map((card, index) => (
            <ComponentCard
              key={index}
              title={card.title}
              description={card.descritpion}
              img={card.img}
              to={card.to}
              cta={card.cta}
            />
          ))}
        </ComponentCardsWrapper>
      </Container>
    </Layout>
  );
}

const Container = styled.div.attrs({
  className: 'md:p-18 p-6 flex-col flex space-y-12',
})``;
const ComponentCardsWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-6',
})``;
// const WelcomeCardsWrapper = styled.div.attrs({
//   className: 'flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4'
// })``;
const ComponentCardsTitle = styled.p.attrs({
  className: 'font-medium text-xl',
})`
color: var(--neutral-700);
`;
