import React, { FC, InputHTMLAttributes, useState } from 'react'
import {
  SelectStyledProps,
  DropDownContainer,
  DropDownHeaderDescription,
  DropDownList,
  DropDownHeader,
  DropDownListContainer,
  ListItem,
} from './styled'

import { Icon } from '../Icon'
import { Flex } from '../Flex'

export type SelectProps = SelectStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Select: FC<SelectProps> = ({
  variant = 'primary',
  options,
  defaultValue,
  ...props
}) => {
  const [selectedItem, setselectedItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const onOptionSelect = (value: string) => {
    setIsOpen(false)
    setselectedItem(value)
  }

  return (
    <DropDownContainer>
      <DropDownHeader isOpen={isOpen} onClick={toggling} variant={variant}>
        <Flex justifyContent="space-between" alignItems="center">
          <DropDownHeaderDescription>
            {selectedItem || defaultValue}
          </DropDownHeaderDescription>

          <Icon
            name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            color="sky.dark"
          />
        </Flex>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options &&
              options.map(option => (
                <ListItem
                  key={option.id}
                  onClick={() => onOptionSelect(option.value)}
                >
                  {option.value}
                </ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
