import React, { FC, InputHTMLAttributes, useState } from 'react'
import {
  SelectStyledProps,
  DropDownContainer,
  DropDownHeaderDescription,
  DropDownList,
  Arrow,
  ArrowUp,
  DropDownHeader,
  ArrowDown,
  DropDownListContainer,
  ListItem,
} from './styled'

export type SelectProps = SelectStyledProps &
  InputHTMLAttributes<HTMLSelectElement>

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
        <DropDownHeaderDescription>
          {selectedItem || defaultValue}
        </DropDownHeaderDescription>

        <span>
          <Arrow>{isOpen ? <ArrowUp /> : <ArrowDown />}</Arrow>
        </span>
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
