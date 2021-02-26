import { GirlWrapper, GirlItem } from './Girl.style';

const Girl = ({ visibleX, visibleY, hiddenX, hiddenY }) => {
  visibleX = parseInt(visibleX);
  visibleY = parseInt(visibleY);
  hiddenX = parseInt(hiddenX);
  hiddenY = parseInt(hiddenY);
  const variantsGirl = {
    visible: {
      opacity: 1,
      transition: { duration: 2 },
      x: visibleX,
      y: visibleY,
      type: 'spring',
    },
    hidden: { opacity: 0, x: hiddenX, y: hiddenY },
    exit: { y: hiddenY, x: hiddenX, transition: { duration: 0.5 } },
  };
  return (
    <GirlWrapper
      variants={variantsGirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <GirlItem />
    </GirlWrapper>
  );
};

export default Girl;
