import React from 'react'
import { Story } from '@storybook/react'
import { Card, CardProps } from '../components'

export default {
  title: 'Design System/Card',
  component: Card,
}

const Template: Story<CardProps & { imgSrc?: string }> = ({
  imgSrc,
  ...args
}) => {
  let { image } = args
  if (imgSrc) {
    image = <img src={imgSrc} alt="card" width="100%" height="100%" />
  }
  return <Card {...args} image={image} />
}

export const Standart = Template.bind({})
Standart.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  footer: 'Action',
  content:
    'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
}

export const Image = Template.bind({})
Image.args = {
  width: '343px',
  title: 'Title',
  subtitle: 'Subtitle',
  footer: 'Action',
  imgSrc:
    'https://media.istockphoto.com/photos/mosque-in-istanbul-turkey-picture-id182468027?k=6&m=182468027&s=612x612&w=0&h=0ZIhG91VoujVVAyBZ9rCX27Gy-vmmYFEaytI163iFaY=',
  content:
    'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
}
