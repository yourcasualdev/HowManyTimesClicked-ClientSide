import Counter from './Counter';
import Title from './Title';
import Footer from './Footer';

import { useState, useEffect } from 'react';

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
      <Title title="How Many Times Visited" />
      <Counter num={num} />
      <Footer />
    </div>
  );
}

export default App;
