import React from 'react';
import styled from 'styled-components';

const currentYear = new Date().getFullYear();

const leftLinks = [
  {
    text: 'Discord',
    to: 'https://discord.gg/Wpk36QRdMN',
  },
  {
    text: 'Github',
    to: 'https://github.com/aragon',
  },
];
const rightLinks = [
  {
    text: 'Aragon',
    to: 'https://aragon.org',
  },
];

export const Footer = () => {
  return (
    <FooterWrapper>
      <LeftContainer>
        <Image src={require('@site/static/img/logo-dark.png').default}></Image>
        <LinksContainer>
          {leftLinks.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </Link>
          ))}
        </LinksContainer>
      </LeftContainer>
      <RightContainer>
        <LinksContainer>
          {rightLinks.map((link, index) => (
            <Link href={link.to} key={index}>
              {link.text} <Text>©{currentYear}</Text>
            </Link>
          ))}
        </LinksContainer>
      </RightContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div.attrs({
  className:
    'flex space-y-8 flex-col md:flex-row bg-primary-400 p-6 md:justify-between md:align-center md:space-y-0 md:space-x-8',
})``;
const Image = styled.img.attrs({
  className: '',
})``;
const LeftContainer = styled.div.attrs({
  className:
    'space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-8',
})``;
const RightContainer = styled.div.attrs({
  className:
    'space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-6',
})``;
const LinksContainer = styled.div.attrs({
  className: 'flex flex-rox space-x-6',
})``;
const Text = styled.span.attrs({
  className: 'text-white',
})``;
const Link = styled.a.attrs({
  className: 'text-white hover:text-neutral-100 cursor-pointer',
})``;
