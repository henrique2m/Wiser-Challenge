import styled from 'styled-components';

import { shade } from 'polished';

interface ButtonProps {
  size?: 'small' | 'big';
}

export const Container = styled.button<ButtonProps>`
  width: ${props => (props.size === 'big' ? 297 : 168)}px;
  height: 48px;
  border: 0;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  transition: background 0.2s;

  &:hover {
    background: linear-gradient(
      267.79deg,
      ${shade(0.2, '#383e71')} 0%,
      ${shade(0.2, '#9d25b0')} 99.18%
    );
  }

  @media (min-width: 668px) {
    box-shadow: 0px 10px 25px #cf99db;
    width: 297px;
  }
`;
