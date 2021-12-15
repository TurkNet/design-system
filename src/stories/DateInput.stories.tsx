import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { DateInput, DateInputProps } from '../components'

export default {
  title: 'Design System/DateInput',
  component: DateInput,
}

const Template: Story<DateInputProps> = args => {
  const [date, setDate] = useState<any>(new Date())
  return (
    <DateInput
      {...args}
      selected={date}
      onChange={date => setDate(date)}
      variant="danger"
    />
  )
}

export const Standart = Template.bind({})
Standart.args = {}
