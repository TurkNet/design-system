import React, { useState } from 'react'
import { SelectStyled, InputStyled, OverlayStyled } from './styled'
import { Icon } from '../Icon'
import Menu from './Menu'
import { InputProps } from '../Input'

export type SelectProps = {
  labelKey?: string
  value: Record<string, any> | undefined
  options: Record<string, any>[]
  onSelect(value: Record<string, any> | undefined): void
} & Omit<InputProps, 'onSelect' | 'value'>

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      options = [],
      labelKey = 'label',
      value,
      placeholder = 'Seçiniz',
      onSelect,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)

    const onToggle = () => {
      setTimeout(() => {
        setOpen(!open)
      }, 0)
    }

    const onBlur = () => {
      setTimeout(() => {
        setOpen(false)
      }, 150)
    }

    return (
      <SelectStyled>
        <InputStyled
          type="select"
          onChange={() => {}}
          {...props}
          ref={ref}
          value={(value && value[labelKey]) || ''}
          placeholder={placeholder}
          autoComplete="off"
          onClick={onToggle}
          onBlur={onBlur}
        />
        <Icon name={open ? 'expand_less' : 'expand_more'} color="sky.dark" />
        {open && options.length > 0 && (
          <OverlayStyled>
            {options.map(option => (
              <Menu
                key={option[labelKey]}
                option={option}
                labelKey={labelKey}
                onSelect={onSelect}
                active={open && value && option[labelKey] === value[labelKey]}
              />
            ))}
          </OverlayStyled>
        )}
      </SelectStyled>
    )
  }
)
