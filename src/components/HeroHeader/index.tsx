// src/components/HeroHeader.tsx
import React from 'react';
import {useScreenSize} from '../../hooks/useScreenSize';
import styled from 'styled-components';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

interface IHeroHeader {
  title: string;
  subtitle: string;
  imgLight: string;
  imgDark: string;
  imgStyle?: React.CSSProperties;
  imgAlt: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
}

export const HeroHeader = (props: IHeroHeader) => {
  const {isMobile} = useScreenSize();
  const imgLightUrl = useBaseUrl(props.imgLight);
  const imgDarkUrl = useBaseUrl(props.imgDark);

  return (
    <HeaderWrapper>
      {isMobile && (
        <ThemedImage
          alt={props.imgAlt}
          sources={{
            light: imgLightUrl,
            dark: imgDarkUrl,
          }}
          style={props.imgStyle}
        />
      )}
      <TextWrapper>
        <Title style={props.titleStyle}>{props.title}</Title>
        <Subtitle style={props.subtitleStyle}>{props.subtitle}</Subtitle>
      </TextWrapper>
      {!isMobile && (
        <ThemedImage
          alt={props.imgAlt}
          sources={{
            light: imgLightUrl,
            dark: imgDarkUrl,
          }}
          style={props.imgStyle}
        />
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-2.5 md:flex-row md:justify-between',
})``;

const TextWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-2 justify-center',
})``;

const Title = styled.h1.attrs({
  className: 'text-4xl font-bold text-center md:text-left',
})`
  color: var(--neutral-700);
`;

const Subtitle = styled.h2.attrs({
  className: 'text-xl text-center md:text-left',
})`
  color: var(--neutral-500);
`;

const Image = styled.img.attrs({
  className: 'flex bg-white',
})``;
