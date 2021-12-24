import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { SearchSelect, SelectProps } from '../components'

export default {
  title: 'Design System/SearchSelect',
  component: SearchSelect,
}

const Options: Record<string, string>[] = [...Array(20).keys()].map(i => ({
  name: `Option ${i + 1}`,
  id: `${i}`,
}))

const Template: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any[]>([])

  const onSearch = (value: string) => {
    setValue(value)
    setOptions(
      Options.filter(i =>
        i.name.toLowerCase().includes(value.toLocaleLowerCase())
      )
    )
  }

  return (
    <>
      <SearchSelect
        {...args}
        value={value}
        onSelect={console.log}
        onSearch={onSearch}
        name="select-input"
        labelKey="name"
        options={options}
      />
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
