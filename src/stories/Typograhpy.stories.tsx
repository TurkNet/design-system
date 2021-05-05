import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import { Flex, Typography, TypographyProps } from '../components';

export default {
  title: 'Desing System/Typography',
  component: Typography,
};

const GridLine = styled(Flex)`
  > * {
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }
`;

const Template: Story<TypographyProps> = args => (
  <GridLine flexDirection="column">
    <Typography {...args} variant="h1">
      H1 Headline
    </Typography>
    <Typography {...args} variant="h2">
      H2 Headline
    </Typography>
    <Typography {...args} variant="h3">
      H3 Headline
    </Typography>
    <Typography {...args} variant="h4">
      H4 Headline
    </Typography>
    <Typography {...args} variant="h5">
      H5 Headline
    </Typography>
    <Typography {...args} variant="h6">
      H6 Headline
    </Typography>
    <Typography {...args} variant="subtitle1">
      S1 Subtitle
    </Typography>
    <Typography {...args} variant="subtitle2">
      S2 Subtitle
    </Typography>
    <Typography {...args} variant="paragraph1">
      P1 Paragraph
    </Typography>
    <Typography {...args} variant="paragraph2">
      P2 Paragraph
    </Typography>
    <Typography {...args} variant="caption1">
      C1 Caption
    </Typography>
    <Typography {...args} variant="caption2">
      C2 Caption
    </Typography>
    <Typography {...args} variant="label">
      LABEL
    </Typography>
  </GridLine>
);

export const Standart = Template.bind({});
Standart.args = {
  color: 'grey.800',
  textAlign: 'left',
};
