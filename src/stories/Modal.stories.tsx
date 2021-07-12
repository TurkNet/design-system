import React, { useState, useEffect } from 'react'
import { Story } from '@storybook/react'
import { Modal, ModalProps, Box, Flex, Typography, Button } from '../components'

export default {
  title: 'Design System/Modal',
  component: Modal,
}

const Template: Story<ModalProps & { showImage: boolean }> = ({
  show: defaultShow = false,
  showImage,
  ...props
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(defaultShow)
  }, [defaultShow])

  const toggle = () => {
    setShow(!show)
  }
  return (
    <>
      <Button size="medium" onClick={toggle}>
        Toggle Modal
      </Button>
      <Modal {...props} show={show} onClosed={toggle}>
        {showImage && (
          <img
            src="https://media.istockphoto.com/photos/mosque-in-istanbul-turkey-picture-id182468027?k=6&m=182468027&s=612x612&w=0&h=0ZIhG91VoujVVAyBZ9rCX27Gy-vmmYFEaytI163iFaY="
            alt="card"
            width="100%"
            height="230px"
          />
        )}
        <Box p="24px 16px">
          <Typography variant="h6">Title</Typography>
          <Typography variant="caption1">Subtitle</Typography>
          <Box height="1px" bg="grey.300" my={10} />
          <Typography>
            A nebula is an interstellar cloud of dust, hydrogen, helium and
            other ionized gases. Originally, nebula was a name for any diffuse
            astronomical object, including galaxies beyond the Milky Way.
          </Typography>
          <Flex justifyContent="space-between" alignItems="center" mt="40px">
            <Button size="medium" variant="ghost">
              Button
            </Button>
            <Flex>
              <Button size="medium" variant="outline" mr="10px">
                Button
              </Button>
              <Button size="medium">Button</Button>
            </Flex>
          </Flex>
        </Box>
      </Modal>
    </>
  )
}

export const Standart = Template.bind({})

Standart.args = {
  width: 500,
  showImage: true,
}
