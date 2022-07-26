import React, { ReactNode } from 'react'
import { useScreenSize } from '../../hooks/useScreenSize'
import styled from 'styled-components'
// TODO: FIX me
// import { IllustrationHuman } from '@aragon/ui-components'


interface IHeroHeader {
  title: string,
  subtitle: string
  img: ReactNode
}

export const HeroHeader = (props: IHeroHeader) => {
  const { isMobile } = useScreenSize()
  return (
    <HeaderWrapper>
      {isMobile &&
        <Image src={props.img} alt="" />
      }
      <TextWrapper>
        <Title>
          {props.title}
        </Title>
        <Subtitle>
          {props.subtitle}
        </Subtitle>
      </TextWrapper>

      {/* TODO: FIX ME  */}
      {/* 
      <IllustrationHuman
        body='chart'
        expression='casual'
        width={800}
        height={450}
      /> */}
      {!isMobile &&
        <Image src={props.img} alt="" />
      }
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-2.5 md:flex-row md:justify-between'
})``;
const TextWrapper = styled.div.attrs({
  className: 'flex flex-col space-y-2 justify-center'
})``;
const Title = styled.p.attrs({
  className: 'text-4xl font-bold text-ui-800 text-center md:text-left'
})``;
const Subtitle = styled.p.attrs({
  className: 'text-xl text-ui-600 text-center md:text-left'
})``;
const Image = styled.img.attrs({
  className: 'flex'
})``;