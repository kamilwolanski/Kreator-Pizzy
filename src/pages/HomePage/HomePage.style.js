import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Header = styled.header`
  height: 100vh;
  background: linear-gradient(
      30deg,
      rgba(3, 28, 40, 0.202472022988883) 5%,
      rgba(255, 255, 255, 0.16) 190%,
      rgba(60, 60, 29, 0.28644961402529767) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

export const Welcome = styled.div`
  position: absolute;
  top: 30%;
  left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// export const Wrapper = styled.div`
//   padding: 20px;
// `;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  font-weight: bold;
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  text-align: center;
`;

export const P = styled(H1)`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
  padding: 15px;
`;

export const StyledButton = styled(Button)`
  padding: 16px 45px !important;
  margin-top: 20px !important;
`;
