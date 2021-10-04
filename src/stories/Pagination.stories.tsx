import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Pagination, PaginationProps } from '../components'

export default {
  title: 'Design System/Pagination',
  component: Pagination,
}

const Template: Story<PaginationProps> = args => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <Pagination {...args} currentPage={currentPage} onChange={handleChange} />
  )
}

export const Standart = Template.bind({})

Standart.args = {
  totalItemsCount: 180,
  itemsCountPerPage: 16,
}
