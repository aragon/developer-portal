import {IconChevronRight} from '@aragon/ui-components';
import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Link} from '@aragon/ui-components';

interface IWelcomeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkLabel: string;
  href: string;
}

export const WelcomeCard = (props: IWelcomeCardProps) => {
  return (
    <CardWrapper>
      <ContentWrapper>
        <div>{props.icon}</div>
        <Title>{props.title}</Title>
        <Description> {props.description}</Description>
      </ContentWrapper>
      <Link
        href={props.href}
        iconRight={<IconChevronRight />}
        label={props.linkLabel}
      />
    </CardWrapper>
  );
};

const CardWrapper = styled.div.attrs({
  className:
    'flex flex-col space-y-5 rounded-xl border-2 border-neutral-50 p-6',
})`
  box-shadow: 0px 10px 20px rgba(31, 41, 51, 0.04),
    0px 2px 6px rgba(31, 41, 51, 0.04), 0px 0px 1px rgba(31, 41, 51, 0.04);
`;

const ContentWrapper = styled.div.attrs({
  className: `flex flex-col space-y-1`,
})``;
const Title = styled.p.attrs({
  className: `text-xl font-bold`,
})``;
const Description = styled.p.attrs({
  className: `line-clamp-2`,
})``;
