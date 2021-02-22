import HomePage from '../pages/HomePage/HomePage';
import Order from '../pages/Order/Order';
import Summary from '../pages/Summary/Summary';
import GlobalStyle from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/order" component={Order} />
          <Route path="/summary" component={Summary} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
