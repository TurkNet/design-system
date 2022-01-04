import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Select, ReactSelectProps } from '../components'

export default {
  title: 'Design System/Select',
  component: Select,
}

const Options: Record<string, string>[] = [...Array(20).keys()].map(i => ({
  label: `Option ${i + 1}`,
  value: `${i}`,
}))

const Template: Story<ReactSelectProps> = ({ ...args }) => {
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')

  const [options, setOptions] = useState<any[]>(Options)

  const onSearch = (value: string) => {
    console.log(value)
    setValue(value)
    setOptions(
      Options.filter(i =>
        i.label.toLowerCase().includes(value.toLocaleLowerCase())
      )
    )
  }

  const onChange = (value: string) => {
    setValue(value)
  }

  return <>{/* <Select {...args} options={options} /> */}</>
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}
