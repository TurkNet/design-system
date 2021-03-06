import React from 'react'
import { Story } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem } from '../components'

export default {
  title: 'Design System/Breadcrumb',
  component: Breadcrumb,
}

const Template: Story = args => {
  return (
    <Breadcrumb {...args}>
      <BreadcrumbItem>First</BreadcrumbItem>
      <BreadcrumbItem>Second</BreadcrumbItem>
      <BreadcrumbItem>Third</BreadcrumbItem>
      <BreadcrumbItem>Fourth</BreadcrumbItem>
    </Breadcrumb>
  )
}

export const Standart = Template.bind({})
