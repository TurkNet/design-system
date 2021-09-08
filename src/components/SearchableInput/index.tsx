import React, { InputHTMLAttributes, useState } from 'react'
import {
  SearchableInputStyled,
  SearchableInputStyledProps,
  SearchableInputContainerStyled,
  DropDownListContainerStyled,
  DropDownListStyled,
  ListItemStyled,
} from './styled'

export type SearchableInputProps = SearchableInputStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const SearchableInput = React.forwardRef<
  HTMLInputElement,
  SearchableInputProps
>(({ variant = 'primary', options, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const onChange = (value: string) => {
    console.log('gelen value: ', value)
    setSearch(value)
    if (value) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const filteredOptions = options?.filter(
    opt => opt.value.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

  return (
    <SearchableInputContainerStyled>
      <SearchableInputStyled
        {...props}
        variant={variant}
        ref={ref}
        onChange={e => onChange(e.target.value)}
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
