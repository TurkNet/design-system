import React, { InputHTMLAttributes, useState } from 'react'
import {
  SearchableInputStyledProps,
  SearchableInputContainerStyled,
  DropDownListContainerStyled,
  DropDownListStyled,
  ListItemStyled,
} from './styled'

import { Input } from '../Input'

export type SearchableInputProps = SearchableInputStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const SearchableInput = React.forwardRef<
  HTMLInputElement,
  SearchableInputProps
>(({ variant = 'primary', options, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const onChange = (value: string) => {
    setSearch(value)
    if (value) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const onFocus = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const onBlur = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  const filteredOptions = options?.filter(
    opt =>
      opt.value
        .toLocaleLowerCase('tr-TR')
        .indexOf(search.toLocaleLowerCase('tr-TR')) !== -1
  )

  return (
    <SearchableInputContainerStyled>
      <Input
        {...props}
        variant={variant}
        ref={ref}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isOpen && (
        <DropDownListContainerStyled>
          <DropDownListStyled>
            {filteredOptions &&
              filteredOptions.map(option => (
                <ListItemStyled key={option.id}>{option.value}</ListItemStyled>
              ))}
          </DropDownListStyled>
        </DropDownListContainerStyled>
      )}
    </SearchableInputContainerStyled>
  )
})
