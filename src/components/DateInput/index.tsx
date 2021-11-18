import React, { FC } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { Input } from '../Input'
import { Icon } from '../Icon'
import { Flex } from '../Flex'
import { Button } from '../Button'
import { ContainerStyled } from './styled'

export type DateInputProps = ReactDatePickerProps

const years = [...Array(100).keys()].map(i => i + 1950).reverse()
const months = [
  'OCAK',
  'ŞUBAT',
  'MART',
  'NİSAN',
  'MAYIS',
  'HAZİRAN',
  'TEMMUZ',
  'AĞUSTOS',
  'EYLÜL',
  'EKİM',
  'KASIM',
  'ARALIK',
]

export const DateInput: FC<DateInputProps> = ({
  dateFormat = 'dd/MM/yyyy',
  ...props
}) => {
  return (
    <ContainerStyled>
      <DatePicker
        withPortal
        fixedHeight
        dateFormat={dateFormat}
        showDisabledMonthNavigation
        customInput={
          <Input icon={<Icon name="date_range" color="grey.600" />} />
        }
        {...props}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Flex justifyContent="space-between" p={10}>
            <select
              value={months[new Date(date).getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={new Date(date).getFullYear()}
              onChange={({ target: { value } }) => changeYear(+value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <Flex>
              <Button
                variant="ghost"
                size="small"
                icon={<Icon name="chevron_left" />}
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                p={8}
              />
              <Button
                variant="ghost"
                size="small"
                icon={<Icon name="chevron_right" />}
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                p={8}
              />
            </Flex>
          </Flex>
        )}
      />
    </ContainerStyled>
  )
}