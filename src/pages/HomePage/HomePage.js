import { Header, Welcome, H1, P } from './HomePage.style';
import pizza_background from '../../assets/backgrounds/pizza_background.jpg';
import { useHistory } from 'react-router-dom';
import StyledButton from '../../components/atoms/StyledButton.style';

const HomePage = () => {
  const history = useHistory();

  const handleOnClick = () => {
    const location = {
      pathname: '/order',
      params: { name: 'John' },
    };

    history.push(location);
  };
  return (
    <Header img={pizza_background}>
      <Welcome>
        <H1>witaj w kreatorze pizzy!</H1>
        <P>Kliknij START aby rozpocząć</P>
        <StyledButton margin extraPadding onClick={handleOnClick}>
          start
        </StyledButton>
      </Welcome>
    </Header>
  );
};

export default HomePage;
