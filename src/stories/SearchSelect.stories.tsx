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
    )
    const result = await response.json()
    return result.entries.map(entry => ({
      label: entry.API,
      asdf: entry.Link,
    }))
  }
  return (
    <>
      <SearchSelect {...args} onSearch={onSearch} />
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
