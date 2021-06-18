import React, { FC, useState } from 'react'
import { Accordion, AccordionItem } from '../Accordion'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Typography } from '../Typography'
import {
  FooterStyled,
  ContentStyled,
  LinkStyled,
  SocialLinkStyled,
} from './styled'

export interface MobileFooterProps {
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

export const MobileFooter: FC<MobileFooterProps> = ({
  links = [],
  accounts = [],
}) => {
  const [expanded, setExpanded] = useState('acc-1')

  const handleExpand = (expandedId: string) => {
    setExpanded(expandedId === expanded ? '' : expandedId)
  }
  return (
    <FooterStyled>
      <ContentStyled dense>
        <Accordion>
          {links.map((i, index) => (
            <AccordionItem
              id={`accordion-${index}`}
              summary={<Typography variant="paragraph1">{i.title}</Typography>}
              onExpand={handleExpand}
              expandedId={expanded}
            >
              {i.items?.map(item => (
                <LinkStyled key={item.title} href={item.link}>
                  {item.title}
                </LinkStyled>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </ContentStyled>
      <ContentStyled dense>
        <Flex flexDirection="column" alignItems="center">
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
          <Typography variant="paragraph1" mb={20} mt={36}>
            Copyright © 2021 TurkNet
          </Typography>
          <LinkStyled href="/gizlilik-sozlesmesi">
            Gizlilik ve Koşullar
          </LinkStyled>
        </Flex>
      </ContentStyled>
    </FooterStyled>
  )
}
