import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { SearchableInput, SearchableInputProps } from '../components'

export default {
  title: 'Design System/SearchableInput',
  component: SearchableInput,
}

const options = [
  { name: 'Option 1', id: 1 },
  { name: 'Option 2', id: 2 },
  { name: 'Option 3', id: 3 },
]

const Template: Story<SearchableInputProps> = args => {
  const [value, setValue] = useState(undefined)

  return (
    <div>
      <SearchableInput
        {...args}
        value={value}
        onSelect={setValue}
        labelKey="name"
        options={options}
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam
        amet ullam aperiam qui voluptatibus, placeat corporis ex earum at veniam
        modi non, fugiat vitae, repellat dolor recusandae nihil reiciendis?
      </p>
    </div>
  )
}

export const Standart = Template.bind({})

Standart.args = {
  placeholder: 'placeholder',
  defaultValue: '',
  disabled: false,
}

Standart.argTypes = {
  variant: {
    control: {
      type: 'radio',
      options: ['primary', 'success', 'info', 'warning', 'danger', 'sky'],
    },
  },
}
