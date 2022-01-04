import React from 'react'
import { Story } from '@storybook/react'
import { SearchSelect, SearchReactSelectProps } from '../components'

export default {
  title: 'Design System/Search Select',
  component: SearchSelect,
}

const Template: Story<SearchReactSelectProps> = ({ ...args }) => {
  const onSearch = async (inputValue: string) => {
    const response = await fetch(
      `https://api.publicapis.org/entries?title=${inputValue}&https=true`
    ).then(res => res.json())
    return response.entries
  }

  return (
    <>
      <SearchSelect
        {...args}
        name="select"
        onSearch={onSearch}
        labelKey="Description"
        valueKey="Description"
        onChange={console.log}
      />
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
