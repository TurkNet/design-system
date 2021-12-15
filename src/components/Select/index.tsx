import React, { useState, useEffect, ReactNode, ChangeEvent } from 'react'
import {
  SelectStyled,
  InputStyled,
  OverlayStyled,
  OptionStyled,
  BgStyled,
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

    const onClose = () => {
      setOpen(false)
      onToggle(false)
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

    const show = open && optionList.length > 0

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
        <BgStyled show={show} onClick={onClose} />
        <OverlayStyled show={show}>
          {optionList.map(option => (
            <OptionStyled
              key={option[labelKey]}
              active={value && option[labelKey] === value[labelKey]}
              onClick={() => {
                onClose()
                onSelect(option)
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
