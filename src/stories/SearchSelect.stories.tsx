import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { SearchSelect, SearchReactSelectProps } from '../components'

export default {
  title: 'Design System/Search Select',
  component: SearchSelect,
}

const Template: Story<SearchReactSelectProps> = ({ ...args }) => {
  const [inputValue, setValue] = useState('')
  const [selectedValue, setSelectedValue] = useState(null)

  const handleInputChange = value => {
    setValue(value)
  }

  const handleChange = value => {
    setSelectedValue(value)
  }

  // load options using API call
  const loadOptions = async () => {
    const response = await fetch(
      `https://api.publicapis.org/entries?title=${inputValue}&https=true`
    )
    const result = await response.json()
    console.log(result.entries)
    return result.entries
  }

  return (
    <>
      {/* <SearchSelect
        {...args}
        value={selectedValue}
        getOptionLabel={e => e.API}
        getOptionValue={e => e.Link}
        options={loadOptions}
        // onInputChange={handleInputChange}
        // onChange={handleChange}
      /> */}
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
