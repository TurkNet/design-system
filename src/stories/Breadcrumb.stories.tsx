import React from 'react'
import { Story } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem, Icon } from '../components'

export default {
  title: 'Design System/Breadcrumb',
  component: Breadcrumb,
}

const Template: Story = args => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <Icon name="home" size={20} />
    </BreadcrumbItem>
    <BreadcrumbItem label="Second" />
    <BreadcrumbItem>Third</BreadcrumbItem>
    <BreadcrumbItem>Fourth</BreadcrumbItem>
    <BreadcrumbItem>Fifth</BreadcrumbItem>
  </Breadcrumb>
)

export const Standart = Template.bind({})
