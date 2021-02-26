import styled from 'styled-components';
import { motion } from 'framer-motion';

const buttonVariants = {
  hoverYoyo: {
    scale: 1.2,
    transition: {
      yoyo: Infinity,
    },
  },
  scale: {
    scale: 1.1,
  },
};
const handleWhileHover = (props) => {
  if (props.yoyo && !props.disabled) {
    return 'hoverYoyo';
  } else if (!props.yoyo && !props.disabled) {
    return 'scale';
  } else {
    return null;
  }
};
const StyledButton = styled(motion.button).attrs((props) => ({
  whileHover: handleWhileHover(props),
  variants: buttonVariants,
}))`
  min-width: ${({ isWidth }) => (isWidth ? '300px' : '0px')};
  margin: ${({ margin }) => (margin ? '20px' : '10px')};
  padding: ${({ extraPadding }) => (extraPadding ? '15px 30px' : '10px')};
  background-color: ${({ theme: { colors } }) => {
    return colors.navyBlue;
  }};
  /* border: ${({ borderBlack }) =>
    borderBlack ? '2px solid black' : '2px solid white'}; */
  border: 2px solid white;
  border-radius: 10px;
  color: ${({ colorBlack, theme: { colors } }) => {
    return colorBlack ? colors.black : colors.white;
  }};
  text-transform: uppercase;
  font-size: ${({ fontM, theme: { fontSize } }) => {
    return fontM ? fontSize.m : fontSize.ml;
  }};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  text-decoration: none;
  transition: 0.2s;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.l;
    }};
  }
  @media (max-width: 1000px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
  @media (max-width: 860px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.sm;
    }};
  }
  @media (max-width: 445px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.s;
    }};
  }
`;

export default StyledButton;
