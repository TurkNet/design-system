import { ifProp, prop, switchProp, ifNotProp } from 'styled-tools';
export declare const themeColor: (variant: string) => ({ color, severity, theme: t, }: any) => any;
export declare const alphaColor: (alpha: number) => (color: any) => any;
export declare const themeMulti: (path: string, values: any[]) => (props: any) => string;
export declare const fontSize: (size: string) => <Props, Theme extends {
    [key: string]: any;
}>(props: Props & {
    theme: Theme;
}) => Theme[keyof Theme] | undefined;
export declare const fontWeight: (weight: string) => <Props, Theme extends {
    [key: string]: any;
}>(props: Props & {
    theme: Theme;
}) => Theme[keyof Theme] | undefined;
export declare const borderRadius: (...radius: string[]) => (props: any) => string;
export declare const space: (...space: string[]) => (props: any) => string;
export declare const opacity: (opaticy: string) => <Props, Theme extends {
    [key: string]: any;
}>(props: Props & {
    theme: Theme;
}) => Theme[keyof Theme] | undefined;
export declare const color: (color: string, alpha?: number) => <P = unknown>(props?: P | undefined) => any;
export declare const propColor: (variant?: string, alpha?: number) => <P = any>(props?: P | undefined) => any;
export { ifProp, prop, switchProp, ifNotProp };
