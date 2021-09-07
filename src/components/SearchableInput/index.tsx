import React, { InputHTMLAttributes, useState, useEffect } from 'react'
import {
  SearchableInputStyled,
  SearchableInputStyledProps,
  SearchableInputContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from './styled'

export type SearchableInputProps = SearchableInputStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const SearchableInput = React.forwardRef<
  HTMLInputElement,
  SearchableInputProps
>(({ variant = 'primary', options, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(true)
  const [search, setSearch] = useState('')

  const onChange = (value: string) => {
    console.log('gelen value: ', value)
    setSearch(value)
  }
  const filteredOptions = options?.filter(
    opt => opt.value.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

  return (
    <SearchableInputContainer>
      <SearchableInputStyled
        {...props}
        variant={variant}
        ref={ref}
        onChange={e => onChange(e.target.value)}
      />
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {filteredOptions &&
              filteredOptions.map(option => (
                <ListItem key={option.id}>{option.value}</ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </SearchableInputContainer>
  )
})
