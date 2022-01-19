import Color from 'color'
import {
  theme,
  withProp,
  ifProp,
  prop,
  switchProp,
  ifNotProp,
} from 'styled-tools'

export const themeColor = (variant: string) => ({
  color,
  severity,
  theme: t,
}: any) => {
  return theme(
    `colors.${[color || severity, variant].filter(i => i).join('.')}`,
    color || severity
  )({
    theme: t,
  })
}

export const alphaColor = (alpha: number) => (color: any): any => {
  try {
    return Color(color).alpha(alpha)
  } catch (error) {
    return color
  }
}

export const themeMulti = (path: string, values: any[]) => (props: any) => {
  return values.map(r => theme(`${path}.${r}`, r)(props)).join(' ')
}

export const fontSize = (size: string) => theme(`fontSizes.${size}`)

export const fontWeight = (weight: string) => theme(`fontWeights.${weight}`)

export const borderRadius = (...radius: string[]) => {
  return themeMulti('borderRadius', radius)
}

export const space = (...space: string[]) => {
  return themeMulti('space', space)
}

export const opacity = (opaticy: string) => theme(`opacity.${opaticy}`)

export const color = (color: string, alpha = 1) => {
  return withProp(`theme.colors.${color}`, alphaColor(alpha))
}

export const propColor = (variant = '', alpha = 1) => {
  return withProp(themeColor(variant), alphaColor(alpha))
}

export { ifProp, prop, switchProp, ifNotProp }
