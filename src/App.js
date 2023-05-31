import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Calculator />
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
