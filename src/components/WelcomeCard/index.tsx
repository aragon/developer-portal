import {IconChevronRight, Link} from '@aragon/ui-components';
import React, {ReactNode} from 'react';
import styled from 'styled-components';

export interface IWelcomeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkLabel: string;
  href: string;
  className?: string;
}

export const WelcomeCard = (props: IWelcomeCardProps) => {
  const {icon, title, description, linkLabel, href, className} = props;

  return (
    <CardWrapper className={className}>
      <ContentWrapper>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      <Link href={href} iconRight={<IconChevronRight />} label={linkLabel} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div.attrs({
  className:
    'flex flex-col space-y-5 rounded-xl border-2 border-neutral-50 p-6',
})`
  box-shadow:
    0px 10px 20px rgba(31, 41, 51, 0.04),
    0px 2px 6px rgba(31, 41, 51, 0.04),
    0px 0px 1px rgba(31, 41, 51, 0.04);
`;

const ContentWrapper = styled.div.attrs({
  className: `flex flex-col space-y-1`,
})``;
const Title = styled.p.attrs({
  className: `text-xl font-bold`,
})`
  color: var(--neutral-700);
`;
const Description = styled.p.attrs({
  className: `line-clamp-2`,
})`
  color: var(--neutral-500);
  line-height: 150%;
`;
const Icon = styled.div.attrs({})`
  margin-bottom: 5px;
`;
