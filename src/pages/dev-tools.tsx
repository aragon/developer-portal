import React from 'react';
import Layout from '@theme/Layout';
import {HeroHeader} from '../components/HeroHeader';
import {WelcomeCard} from '../components/WelcomeCard';
import devTools from '../data/DevTools';
import styled from 'styled-components';

export default function DevTools(): JSX.Element {
  return (
    <Layout>
      <Container>
        <HeroHeader
          title="Tools to get you building quick"
          subtitle="Here you'll find tooling, boilerplates, and tutorials to get started building with Aragon OSx quick."
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          img="https://res.cloudinary.com/duvrxe0m9/image/upload/v1688153627/dev-portal-huuman_ziy7xv.png"
          imgAlt="Developer"
          imgStyle={styles.heroHeader}
        />
        <WelcomeCardsWrapper>
          {devTools.map((card, index) => (
            <WelcomeCard
              className="w-80"
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

const styles = {
  heroHeader: {
    width: '30%',
  },
} as const;

const Container = styled.div.attrs({
  className: 'md:p-18 p-6 flex-col flex space-y-12',
})``;
const WelcomeCardsWrapper = styled.div.attrs({
  className: 'flex flex-wrap md:flex-row place-content-stretch gap-8',
})``;
