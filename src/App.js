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
      <Counter num={num} />
    </div>
  );
}

export default App;
