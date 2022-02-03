import Counter from './counter/Counter';
import Title from './title/Title';
import Footer from './footer/Footer';
import LoadIcon from './loadicon/LoadIcon';
import ErrorTitle from './errortitle/ErrorTitle';

import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://how-many-times-clicked.herokuapp.com/num';

  const [num, setNum] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const fetchNum = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive a response');
        const resNumber = await response.json();
        setNum(resNumber);
        setFetchError(null);
      } catch (error) {
        setFetchError(error);
      } finally {
        setIsLoading(false);
      }
    }

    (async () => fetchNum())();


  }, [])


  return (
    <div className="App">

      <Title title="How Many Times Visited" />

      <main>

        {isLoading && <LoadIcon />}

        {fetchError && <ErrorTitle errortitle={`${fetchError}`} />}

        {!fetchError && !isLoading && <Counter num={num} />}

      </main>


      <Footer />
    </div>
  );
}

export default App;
