import Color from 'color'
import { theme, withProp, ifProp, prop, switchProp } from 'styled-tools'

export const themeColor = (variant: string) => ({
  color,
  severity,
  theme,
}: any) => {
  return theme.colors[color || severity][variant]
}

export const alphaColor = (alpha: number) => (color: any): any => {
  return Color(color).alpha(alpha)
}

export const fontSize = (size: string) => theme(`fontSizes.${size}`)

export const fontWeight = (weight: string) => theme(`fontWeights.${weight}`)

export const borderRadius = (radius: string) => theme(`borderRadius.${radius}`)

export const space = (space: string) => theme(`space.${space}`)

export const opacity = (opaticy: string) => theme(`opacity.${opaticy}`)

export const color = (color: string, alpha = 1) => {
  return withProp(`theme.colors.${color}`, alphaColor(alpha))
}

export const propColor = (variant = '', alpha = 1) => {
  return withProp(themeColor(variant), alphaColor(alpha))
}

export { ifProp, prop, switchProp }
