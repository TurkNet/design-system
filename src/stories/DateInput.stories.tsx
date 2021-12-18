import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { DateRangeInput } from 'src/components/DateRangeInput'
import { DateInput, DateInputProps } from '../components'

export default {
  title: 'Design System/DateInput',
  component: DateInput,
}

const Template: Story<DateInputProps> = args => {
  const dateFormat = 'dd.MM.yyyy'
  const [date, setDate] = useState<any>(new Date())
  const [rangeDate, setRangeDate] = useState<any>(new Date())

  return (
    <>
      <DateInput {...args} selected={date} onChange={date => setDate(date)} />
      <br />
      <br />
      <br />

      <DateRangeInput
        {...args}
        dateFormat={dateFormat}
        name="dateRange"
        placeholderText="Tarih aralığı seçiniz"
        selected={rangeDate as any}
        onChange={rangeDate => setRangeDate(rangeDate)}
        selectsRange
      />
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}
