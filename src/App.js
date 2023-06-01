import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import './App.css';

function App() {
  return (
    <Calculator>
      <Screen value="0" />
      <ButtonBox />
    </Calculator>
  );
}

export default App;
