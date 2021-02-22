import {
  StyledNav,
  NavCenter,
  TotalPrice,
  NavData,
  Capacity,
} from './Nav.style';
import { FaWeightHanging } from 'react-icons/fa';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import BackToStart from '../../atoms/BackToStart';

const Nav = ({ totalAmount, shoppingBasket }) => {
  const [isBlackNav, setIsBlackNav] = useState(false);
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > 1) {
      setIsBlackNav(true);
    } else {
      setIsBlackNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <StyledNav isBlackNav={isBlackNav}>
      <NavCenter>
        <BackToStart />
        <NavData>
          <TotalPrice>{totalAmount} ZŁ</TotalPrice>
          {shoppingBasket ? (
            <Capacity>
              {shoppingBasket.weight}/{shoppingBasket.maxWeight}
              <FaWeightHanging
                style={{ fontSize: '16px', marginLeft: '10px' }}
              />
            </Capacity>
          ) : (
            <p style={{ opacity: '0' }}>x</p>
          )}
        </NavData>
      </NavCenter>
    </StyledNav>
  );
};

const mapStateToProps = ({ orders }) => ({
  totalAmount: orders.totalAmount,
  shoppingBasket: orders.shoppingBasket[0],
});

const NavConsumer = connect(mapStateToProps)(Nav);

export default NavConsumer;
