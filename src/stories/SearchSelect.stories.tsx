import React from 'react'
import { Story } from '@storybook/react'
import { SearchSelect, SearchReactSelectProps } from '../components'

export default {
  title: 'Design System/Search Select',
  component: SearchSelect,
}

const Template: Story<SearchReactSelectProps> = ({ ...args }) => {
  const onSearch = (inputValue: string) => {
    return [{ label: 'İstanbul', id: '1' }]
  }
  return (
    <>
      <SearchSelect {...args} options={[]} onSearch={onSearch} />
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
