import React, { FC } from 'react'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Typography } from '../Typography'
import {
  FooterStyled,
  ContentStyled,
  LinkStyled,
  TitleStyled,
  SocialLinkStyled,
} from './styled'

export interface FooterProps {
  links: ILinks[]
  accounts: IAccount[]
}

interface ILinks {
  title: string
  items: ILinkItem[]
}

interface ILinkItem {
  title: string
  link: string
}

interface IAccount {
  img: string
  link: string
  name?: string
}

export const DesktopFooter: FC<FooterProps> = ({
  links = [],
  accounts = [],
}) => {
  return (
    <FooterStyled>
      <ContentStyled>
        <Flex justifyContent="space-between">
          {links.map(i => (
            <Box flex="1">
              <TitleStyled>{i.title}</TitleStyled>
              <Box>
                {i.items?.map(item => (
                  <LinkStyled key={item.title} href={item.link}>
                    {item.title}
                  </LinkStyled>
                ))}
              </Box>
            </Box>
          ))}
        </Flex>
      </ContentStyled>
      <ContentStyled>
        <Flex alignItems="center">
          <Flex flex="1" alignItems="center">
            <Typography variant="paragraph1" mr={24}>
              Copyright © 2021 TurkNet
            </Typography>
            <LinkStyled href="/gizlilik-sozlesmesi">
              Gizlilik ve Koşullar
            </LinkStyled>
          </Flex>
          <Box>
            {accounts.map(item => (
              <SocialLinkStyled
                key={item.name}
                href={item.link}
                rel="reoppener"
                target="_blank"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  height="17px"
                  width="17px"
                />
              </SocialLinkStyled>
            ))}
          </Box>
        </Flex>
      </ContentStyled>
    </FooterStyled>
  )
}
