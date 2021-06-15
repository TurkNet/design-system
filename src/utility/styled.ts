import Color from 'color'

export const themeColor = (variant: string) => ({ color, theme }: any) =>
  theme.colors[color][variant]
export const alphaColor = (alpha: number) => (color: any): any =>
  Color(color).alpha(alpha)
