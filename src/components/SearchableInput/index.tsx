import React, { InputHTMLAttributes, useState, FC } from 'react'
import {
  SearchableInputStyledProps,
  SearchableInputStyled,
  DropDownStyled,
  ListItemStyled,
} from './styled'

import { Input } from '../Input'

export type SearchableInputProps = {
  value: Record<string, any> | undefined
  labelKey?: string
  options?: Array<Record<string, any>>
  onSelect?(value: Record<string, any> | undefined): void
} & SearchableInputStyledProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onSelect' | 'value'>

export const SearchableInput: FC<SearchableInputProps> = ({
  variant = 'primary',
  options,
  onSelect,
  value,
  labelKey = 'label',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const onFocus = () => {
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 0)
  }

  const onBlur = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const filteredOptions = options?.filter(
    (opt: Record<string, any>) =>
      opt[labelKey]
        .toLocaleLowerCase('tr-TR')
        .indexOf(search.toLocaleLowerCase('tr-TR')) !== -1
  )

  const selectOption = (option: Record<string, any>) => {
    setSearch(option[labelKey])
    if (onSelect) onSelect(option)
  }

  return (
    <SearchableInputStyled>
      <Input
        {...props}
        variant={variant}
        onChange={(e: any) => setSearch(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        defaultValue={value && value[labelKey]}
        value={search}
      />
      {isOpen && (
        <DropDownStyled>
          {filteredOptions &&
            filteredOptions.map((option: Record<string, any>) => (
              <ListItemStyled
                key={option.id}
                onClick={() => selectOption(option)}
              >
                {option[labelKey]}
              </ListItemStyled>
            ))}
        </DropDownStyled>
      )}
    </SearchableInputStyled>
  )
}
