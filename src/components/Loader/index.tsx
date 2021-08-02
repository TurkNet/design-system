import React, { FC } from 'react'
import {
  MainStyled,
  CircleStyled,
  LinearStyled,
  LoaderStyledProps,
} from './styled'

export interface LoaderProps extends LoaderStyledProps {
  main?: boolean
}

export const CircleLoader: FC<LoaderProps> = ({
  main,
  size = 48,
  color = 'primary.normal',
}) => {
  if (main) {
    return (
      <MainStyled>
        <CircleStyled color={color} />
      </MainStyled>
    )
  }

  return <CircleStyled size={size} color={color} />
}

export const LinearLoader: FC = () => {
  return <LinearStyled />
}
