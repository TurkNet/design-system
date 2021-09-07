import React from 'react'
import { Story } from '@storybook/react'
import { SearchableInput, SearchableInputProps } from '../components'

export default {
  title: 'Design System/SearchableInput',
  component: SearchableInput,
}

const options = [
  { value: 'Option 1', id: 1 },
  { value: 'Option 2', id: 2 },
  { value: 'Option 3', id: 3 },
]

const Template: Story<SearchableInputProps> = args => (
  <SearchableInput {...args} />
)

export const Standart = Template.bind({})

Standart.args = {
  placeholder: 'placeholder',
  defaultValue: '',
  disabled: false,
  options,
}

Standart.argTypes = {
  variant: {
    control: {
      type: 'radio',
      options: ['primary', 'success', 'info', 'warning', 'danger', 'sky'],
    },
  },
}
