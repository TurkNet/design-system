import React from 'react'
import { Story } from '@storybook/react'
import { Tooltip, TooltipProps, Box, Input, Icon } from '../components'

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
}

const Template: Story<TooltipProps> = ({ ...args }) => {
  return (
    <Box m={150}>
      <Tooltip {...args}>Tooltip göster</Tooltip>
      <br />
      <br />
      <br />
      <Input
        onClickIcon={console.log}
        icon={
          <Tooltip title="harika bir tooltip örneği ile karşı karşıyayız. harika bir tooltip örneği ile karşı karşıyayız. harika bir tooltip örneği ile karşı karşıyayız">
            <Icon name="info" color="currentColor" />
          </Tooltip>
        }
      />
      <br />
      <br />
      <br />
      <Input
        onClickIcon={console.log}
        icon={
          <Tooltip title="harika bir tooltip örneği ile karşı karşıyayız. harika bir tooltip örneği ile karşı karşıyayız. harika bir tooltip örneği ile karşı karşıyayız">
            <Icon name="home" color="currentColor" />
          </Tooltip>
        }
      />
    </Box>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  title: 'tooltip is shown',
}
