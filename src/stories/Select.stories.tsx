import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Icon, Select, SelectProps } from '../components'

export default {
  title: 'Design System/Select',
  component: Select,
}

const Template: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState(undefined)
  const [openOverlay, setOpenOverlay] = useState(false)

  const onClear = () => {
    setValue(undefined)
  }
  return (
    <>
      <Select
        {...args}
        value={value}
        onSelect={setValue}
        name="select-input"
        labelKey="name"
        icon={
          <Icon
            name={openOverlay ? 'cancel' : 'add_circle'}
            color="primary.normal"
            onClick={onClear}
          />
        }
        onToggle={setOpenOverlay}
        searchable
        options={[
          { name: 'Option 1', id: '1' },
          { name: 'Option 2', id: '2' },
          { name: 'Option 3', id: '3' },
        ]}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Select
        {...args}
        value={value}
        onSelect={setValue}
        name="select-input"
        labelKey="name"
        variant="danger"
        placement="top"
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
