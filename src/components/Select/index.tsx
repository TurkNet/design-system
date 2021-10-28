import React, { useState, ChangeEvent, useEffect, ReactNode } from 'react'
import {
  SelectStyled,
  InputStyled,
  OverlayStyled,
  OptionStyled,
} from './styled'
import { Icon } from '../Icon'
import type { InputProps } from '../Input'
import { noop } from '../../utility'

type IOption = Record<string, any>

export type SelectProps = {
  labelKey?: string
  value: IOption | undefined
  options: IOption[]
  locale?: string
  icon?: ReactNode
  searchable?: boolean
  placement?: 'top' | 'bottom'
  onSelect(value: IOption | undefined): void
  onToggle?(open: boolean): void
} & Omit<InputProps, 'onSelect' | 'value'>

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      options = [],
      labelKey = 'label',
      value,
      placeholder = 'Seçiniz',
      locale = 'tr-TR',
      icon,
      searchable = false,
      placement = 'bottom',
      onSelect = noop,
      onToggle = noop,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [optionList, setOptionList] = useState(options)
    const [inputValue, setInputValue] = useState(
      (value && value[labelKey]) || ''
    )

    const handleToggle = () => {
      setOpen(!open)
      onToggle(!open)
    }

    const onBlur = () => {
      setTimeout(() => {
        setOpen(false)
        onToggle(false)
      }, 150)
      setInputValue(value && value[labelKey])
    }

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
      if (!searchable) {
        return
      }
      const { value } = evt.target
      const list = options.filter((opt: IOption) => {
        return opt[labelKey]
          .toLocaleLowerCase(locale)
          .includes(value.toLocaleLowerCase(locale))
      })
      setOptionList(list)
      setInputValue(value)
    }

    useEffect(() => {
      setInputValue(value && value[labelKey])
    }, [value, labelKey])

    return (
      <SelectStyled>
        <InputStyled
          {...props}
          type="select"
          onChange={onChange}
          ref={ref}
          value={inputValue || ''}
          placeholder={placeholder}
          autoComplete="off"
          onClick={handleToggle}
          onBlur={onBlur}
          searchable={searchable}
          icon={
            icon || (
              <Icon
                name={open ? 'expand_less' : 'expand_more'}
                color="sky.dark"
              />
            )
          }
        />
        {open && optionList.length > 0 && (
          <OverlayStyled placement={placement}>
            {optionList.map(option => (
              <OptionStyled
                key={option[labelKey]}
                active={value && option[labelKey] === value[labelKey]}
                onClick={() => onSelect(option)}
              >
                {option[labelKey]}
              </OptionStyled>
            ))}
          </OverlayStyled>
        )}
      </SelectStyled>
    )
  }
)
