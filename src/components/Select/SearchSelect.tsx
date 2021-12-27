import React, { ReactNode, useState, useEffect, useRef } from 'react'
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
    const [open, setOpen] = useState(true)
    const [searchValue, setSearchValue] = useState(value)
    const [selected, setSelected] = useState<IOption>({})
    const optionsRef = useRef()
    const [active, setActive] = useState(0)

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

    const handleKeypress = e => {
      if (e.key === 'Enter') {
        handleSelect(options[active])
      }
      if (e.keyCode === 40) {
        if (active < options.length) {
          setActive(p => p + 1)
        }
        optionsRef?.current?.children[active]?.focus()
      }
      if (e.keyCode === 38) {
        if (active > 0) {
          setActive(p => p - 1)
        }
        optionsRef?.current?.children[active]?.focus()
      }
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
          onFocus={handleToggle}
          onKeyDown={handleKeypress}
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
        <OverlayStyled show={show} onKeyDown={handleKeypress} ref={optionsRef}>
          {options.map((option, i) => (
            <OptionStyled
              key={option[labelKey]}
              active={(value && option[labelKey] === value) || i === active}
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                setActive(i)
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
