import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
}

export default App;
