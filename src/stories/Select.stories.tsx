import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Select, SelectProps } from '../components'

export default {
  title: 'Design System/Select',
  component: Select,
}

const Template: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState(undefined)
  return (
    <>
      <Select
        {...args}
        value={value}
        onSelect={setValue}
        name="select-input"
        labelKey="name"
        options={[
          { name: 'Option 1', id: '1' },
          { name: 'Option 2', id: '2' },
          { name: 'Option 3', id: '3' },
        ]}
      />
      <br />

      <Select
        {...args}
        value={value}
        onSelect={setValue}
        name="select-input"
        labelKey="name"
        variant="danger"
        options={[
          { name: 'Option 1', id: '1' },
          { name: 'Option 2', id: '2' },
          { name: 'Option 3', id: '3' },
        ]}
      />
      <br />

      <Select
        {...args}
        value={{ name: 'Option 1', id: '1' }}
        onSelect={setValue}
        name="select-input"
        labelKey="name"
        disabled
      />
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
