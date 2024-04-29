import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import TestComponents from './components/TestComponents';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestComponents />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
