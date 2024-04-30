import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import TestComponents from './components/TestComponents';
import CardList2 from './components/CardList2';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestComponents />} />
          <Route path="/posts" element={<CardList2 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
