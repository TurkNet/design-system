import React from 'react'
import { Story } from '@storybook/react'
import { FileUpload, FileUploadProps } from '../components'

export default {
  title: 'Design System/File Upload',
  component: FileUpload,
}

const Template: Story<FileUploadProps> = args => (
  <FileUpload {...args} onUpload={console.log} />
)

export const Standart = Template.bind({})
Standart.args = {
  multiple: false,
}
