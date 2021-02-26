import HomePage from '../pages/HomePage/HomePage';
import Order from '../pages/Order/Order';
import Summary from '../pages/Summary/Summary';
import GlobalStyle from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={HomePage} />
          <Route path="/order" component={Order} />
          <Route path="/summary" component={Summary} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
