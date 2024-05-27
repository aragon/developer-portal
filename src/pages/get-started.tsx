import React from 'react';
import {HeroHeader} from '../components/HeroHeader';
import {WelcomeCard} from '../components/WelcomeCard';
import devTools from '../data/DevTools';
import styled from 'styled-components';
import Layout from '@theme/Layout';
import {ColorModeProvider} from '@docusaurus/theme-common/internal';

const GetStarted = () => {
  return (
    <ColorModeProvider>
      <Container>
        <HeroHeader
          title="Tools to get you building quick"
          subtitle="Here you'll find tooling, boilerplates, and tutorials to get started building with Aragon OSx quick."
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          imgLight="/img/dev-portal-huuman_ziy7xv.png"
          imgDark="/img/dev-portal-human_dark.png"
          imgAlt="Developer"
          imgStyle={styles.heroHeader}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
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
    </ColorModeProvider>
  );
};

const styles = {
  heroHeader: {
    width: '30%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
    color: 'var(--neutral-700),',
  },
} as const;

const Container = styled.div.attrs({
  className: 'flex-col flex space-y-12',
})`
  width: 100%;
  box-sizing: border-box;
`;
const WelcomeCardsWrapper = styled.div.attrs({
  className: 'flex flex-wrap md:flex-row place-content-stretch gap-8',
})``;

export default GetStarted;
