import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';
import {HeroHeader} from '../components/HeroHeader';
import {ComponentCard} from '../components/ComponentCard';
import {WelcomeCard} from '../components/WelcomeCard';
import componentCards from '../data/ComponentCards';
import welcomeCards from '../data/WelcomeCards';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <HeroHeader
          title="Aragon OSx Developer Portal"
          subtitle="Here you'll find guides, resources, and references to build with the Aragon stack"
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          img={require('@site/static/img/welcome-image.png').default}
          imgAlt="Welcome to Aragon OSx"
        />
        <ComponentCardsWrapper>
          <ComponentCardsTitle>Explore Products</ComponentCardsTitle>
          {componentCards.map((card, index) => (
            <ComponentCard
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
              to={card.to}
              cta={card.cta}
            />
          ))}
        </ComponentCardsWrapper>
        <WelcomeCardsWrapper>
          {welcomeCards.map((card, index) => (
            <WelcomeCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              href={card.href}
              linkLabel={card.linkLabel}
            />
          ))}
        </WelcomeCardsWrapper>
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
const WelcomeCardsWrapper = styled.div.attrs({
  className: 'flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4',
})``;
const ComponentCardsTitle = styled.p.attrs({
  className: 'font-medium text-xl',
})`
  color: var(--neutral-700);
`;
