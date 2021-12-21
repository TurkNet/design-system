import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { DateInput, DateInputProps } from '../components'

export default {
  title: 'Design System/DateInput',
  component: DateInput,
}

const StandartTemplate: Story<DateInputProps> = args => {
  const [date, setDate] = useState<any>(new Date())

  return (
    <DateInput {...args} selected={date} onChange={date => setDate(date)} />
  )
}

export const Standart = StandartTemplate.bind({})
Standart.args = {
  dateFormat: 'dd.MM.yyyy',
}

const MultiInputRangeTemplate: Story<DateInputProps> = args => {
  const [startDate, setStartDate] = useState<any>(new Date())
  const [endDate, setEndDate] = useState<any>(null)

  return (
    <>
      <DateInput
        {...args}
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
      />
      <br />
      <DateInput
        {...args}
        selectsEnd
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        onChange={date => setEndDate(date)}
        minDate={startDate}
      />
    </>
  )
}
export const MultiInputRange = MultiInputRangeTemplate.bind({})
MultiInputRange.args = {
  dateFormat: 'dd.MM.yyyy',
}

const SingleInputRangeTemplate: Story<DateInputProps> = args => {
  const [rangeDate, setRangeDate] = useState<any>()

  return (
    <>
      <DateInput
        {...args}
        name="dateRange"
        placeholderText="Tarih aralığı seçiniz"
        selected={rangeDate as any}
        onChange={rangeDate => setRangeDate(rangeDate)}
        selectsRange
      />
    </>
  )
}

export const SingleInputRange = SingleInputRangeTemplate.bind({})
SingleInputRange.args = {
  dateFormat: 'dd.MM.yyyy',
}
