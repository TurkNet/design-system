import React, { FC, InputHTMLAttributes, useState } from 'react'
import {
  SelectStyledProps,
  DropDownContainer,
  DropDownHeaderDescription,
  DropDownList,
  Arrow,
  ArrowUp,
  DropDownHeader,
  Main,
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
  placeholder = 'choose new',
  ...props
}) => {
  const [defaultItem, setdefaultItem] = useState(defaultValue || 'Select')
  const [selectedItem, setselectedItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isDown, setIsDown] = useState(true)

  const toggling = () => {
    console.log('isOpen: ', isOpen, 'isDown', isDown)
    setIsOpen(!isOpen)
    setIsDown(!isDown)
  }

  const onOptionClicked = (value: string) => {
    setIsOpen(false)
    setselectedItem(value)
    console.log('Secilen Deger: ', value)
  }

  console.log('Status isOpen: ', isOpen, 'Status isDown', isDown)
  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader isOpen={isOpen} onClick={toggling}>
          <DropDownHeaderDescription>
            {defaultItem || selectedItem}
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
                    // onClick={onOptionClicked(option.value)}
                  >
                    {option.value}
                  </ListItem>
                ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}
