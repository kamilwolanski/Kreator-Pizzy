import { GraterWrapper, GraterItem } from './Grater.style';

const Grater = ({ visibleX, hiddenX, visibleY, hiddenY }) => {
  const variantsGrater = {
    visible: {
      opacity: 1,
      transition: { duration: 1.8 },
      x: visibleX,
      y: visibleY,
      type: 'spring',
    },
    hidden: { opacity: 1, x: hiddenX, y: hiddenY },
    exit: { y: hiddenY, x: hiddenX, transition: { duration: 0.7 } },
  };
  return (
    <GraterWrapper
      variants={variantsGrater}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <GraterItem />
    </GraterWrapper>
  );
};

export default Grater;
