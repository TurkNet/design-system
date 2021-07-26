import React from 'react'
import { Story } from '@storybook/react'
import { Pagination, PaginationProps } from '../components'

export default {
  title: 'Design System/Pagination',
  component: Pagination,
}

const Template: Story<PaginationProps> = args => <Pagination {...args} />

export const Standart = Template.bind({})

Standart.args = {
  totalItemsCount: 180,
  itemsCountPerPage: 16,
}
