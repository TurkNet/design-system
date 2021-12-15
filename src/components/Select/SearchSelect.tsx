import React, { ReactNode, useState, useEffect } from 'react'
import {
  SelectStyled,
  InputStyled,
  OverlayStyled,
  OptionStyled,
  BgStyled,
} from './styled'
import { Icon } from '../Icon'
import { noop } from '../../utility'
import type { InputProps } from '../Input'

type IOption = Record<string, any>

export type SearchSelectProps = {
  labelKey?: string
  valueKey?: string
  value?: string
  name?: string
  options: IOption[]
  locale?: string
  icon?: ReactNode
  onSelect(value: IOption | undefined): void
  onSearch(value: string): void
  onToggle?(open: boolean): void
} & Omit<InputProps, 'onSelect' | 'value'>

export const SearchSelect = React.forwardRef<
  HTMLInputElement,
  SearchSelectProps
>(
  (
    {
      name = 'select',
      options = [],
      labelKey = 'label',
      valueKey = 'id',
      value = '',
      placeholder = 'Seçiniz',
      icon,
      onSelect = noop,
      onToggle = noop,
      onSearch = noop,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [searchValue, setSearchValue] = useState(value)
    const [selected, setSelected] = useState<IOption>({})

    const handleToggle = () => {
      setOpen(!open)
      onToggle(!open)
    }

    const onClose = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      setOpen(false)
      onToggle(false)
      onSelect(selected)
    }

    const handleSelect = (option: IOption) => {
      setSearchValue(option[labelKey])
      setSelected(option)
      onSelect(option)
      handleToggle()
    }

    useEffect(() => {
      setSearchValue(value)
      setSelected({})
    }, [value])

    const show = open && options.length > 0

    return (
      <SelectStyled>
        <InputStyled
          {...props}
          type="select"
          value={searchValue || ''}
          onChange={e => onSearch(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          onClick={handleToggle}
          searchable
          icon={
            icon || (
              <Icon
                name={open ? 'expand_less' : 'expand_more'}
                color="sky.dark"
              />
            )
          }
        />
        <input
          name={name}
          ref={ref}
          type="hidden"
          defaultValue={selected[valueKey] || ''}
        />
        <BgStyled show={show} onClick={onClose} />
        <OverlayStyled show={show}>
          {options.map(option => (
            <OptionStyled
              key={option[labelKey]}
              active={value && option[labelKey] === value}
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                handleSelect(option)
              }}
            >
              {option[labelKey]}
            </OptionStyled>
          ))}
        </OverlayStyled>
      </SelectStyled>
    )
  }
)
