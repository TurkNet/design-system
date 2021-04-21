import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

type Type = React.FC<Omit<React.ComponentProps<'div'>, 'color'>>;

export const BoxStyled = styled<Type>(('div' as unknown) as Type)`
  ${space}
  ${layout}
  ${color}
`;
