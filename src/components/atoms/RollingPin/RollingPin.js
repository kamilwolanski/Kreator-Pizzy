import { RollingPinWrapper, RollingPinItem } from './RollingPin.style';

const RollingPin = ({ visibleY, hiddenY, exitY, exitX }) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 },
      x: 0,
      y: parseInt(visibleY),
      type: 'spring',
      stiffness: 500,
    },
    hidden: { opacity: 1, x: '-100%', y: parseInt(hiddenY) },
    exit: {
      y: parseInt(exitY),
      x: parseInt(exitX),
      transition: { duration: 0.5 },
    },
  };
  return (
    <RollingPinWrapper
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <RollingPinItem />
    </RollingPinWrapper>
  );
};

export default RollingPin;
