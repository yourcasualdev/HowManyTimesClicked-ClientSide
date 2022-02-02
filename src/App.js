import Counter from './Counter'
import { useState, useEffect } from 'react'

function App() {
  const API_URL = 'https://how-many-times-clicked.herokuapp.com/num';

  const [num, setNum] = useState('');



  useEffect(() => {
    const fetchNum = async () => {
      const response = await fetch(API_URL);
      setNum(await response.json());
    }
    fetchNum();
  }, [])

  return (
    <div className="App">
      <h1 className="title">How Many Times Visited</h1>
      <Counter num={num} />
      <footer>&copy; <a target="_blank" href="http://ibrahimbabal.com">BABAL</a> </footer>
    </div>
  );
}

export default App;
