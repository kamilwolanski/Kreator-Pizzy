import { Header, Welcome, H1, P, Github } from './HomePage.style';
import { useHistory } from 'react-router-dom';
import StyledButton from '../../components/atoms/StyledButton.style';
import Pizza from '../../components/atoms/Pizza/Pizza';
import Grater from '../../components/atoms/Grater/Grater';
import Dough from '../../components/atoms/Dough/Dough';
import RollingPin from '../../components/atoms/RollingPin/RollingPin';

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
    <Header>
      <Welcome>
        <H1>witaj w kreatorze pizzy!</H1>
        <P>Kliknij START aby rozpocząć</P>
        <StyledButton margin extraPadding yoyo onClick={handleOnClick}>
          start
        </StyledButton>
      </Welcome>
      <Pizza />
      <Grater visibleX="55vw" hiddenX="55vw" visibleY="30vh" hiddenY="-30vh" />
      <RollingPin visibleY="-70" hiddenY="-140" exitY="-200" exitX="-160" />
      <Dough />
      <a target="_blank" href="https://github.com/kamilwolanski/Kreator-Pizzy">
        <Github />
      </a>
    </Header>
  );
};

export default HomePage;
