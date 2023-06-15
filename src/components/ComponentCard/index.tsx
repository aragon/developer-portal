import {IconChevronRight} from '@aragon/ui-components';
import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Link} from '@aragon/ui-components';
import {useScreenSize} from '../../hooks/useScreenSize';

export interface IComponentCardProps {
  title: string;
  description: string;
  img: ReactNode;
  to: string;
  cta?: string;
}

type SvgContainerProps = {
  isMobile: boolean;
};

export const ComponentCard = (props: IComponentCardProps) => {
  const {isMobile} = useScreenSize();

  return (
    <A href={props.to} target="_blank" title={props.cta || 'Learn more'}>
      <CardWrapper>
        <SvgContainer isMobile={isMobile}>{props.img}</SvgContainer>
        <ContentWrapper>
          <TextWrapper>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
          </TextWrapper>
          <Link
            href={props.to}
            iconRight={<IconChevronRight />}
            label={props.cta || 'Learn More'}
          />
        </ContentWrapper>
      </CardWrapper>
    </A>
  );
};

const CardWrapper = styled.div.attrs({
  className: 'flex flex-col md:flex-row rounded-xl border-2 border-neutral-50',
})`
  box-shadow: 0px 10px 20px rgba(31, 41, 51, 0.04),
    0px 2px 6px rgba(31, 41, 51, 0.04), 0px 0px 1px rgba(31, 41, 51, 0.04);
`;
const ContentWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-3 md:py-8 p-6',
})``;
const TextWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-1',
})``;
const SvgContainer = styled.div.attrs({
  className: 'flex rounded-xl',
})`
  svg {
    width: ${getSvgSize};
    height: ${getSvgSize};
    border-radius: ${getSvgBorderRadius};
  }
`;
const Title = styled.p.attrs({
  className: 'text-xl font-bold',
})`
  color: var(--neutral-700);
`;
const Description = styled.p.attrs({
  className: 'line-clamp-4 md:line-clamp-2',
})`
  color: var(--neutral-500);
`;
const Image = styled.img.attrs({
  className: 'max-h-46',
})`
  object-fit: cover;
`;
const A = styled.a.attrs({
  className: 'hover:no-underline',
})`
&:hover {
  text-decoration: none !important;
}
`;

function getSvgBorderRadius(props: SvgContainerProps) {
  if (props.isMobile) {
    return '8px 8px 0px 0px';
  }
  return '8px 0px 0px 8px';
}
function getSvgSize(props: SvgContainerProps) {
  if (props.isMobile) {
    return '100%';
  }
  return '';
}
