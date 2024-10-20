import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';
import {HeroHeader} from '../components/HeroHeader';
import {ComponentCard} from '../components/ComponentCard';
import componentCards from '../data/ComponentCards';
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <HeroHeader
          title="Aragon Developer Portal"
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
const ComponentCardsTitle = styled.p.attrs({
  className: 'font-medium text-xl',
})`
  color: var(--neutral-700);
`;
