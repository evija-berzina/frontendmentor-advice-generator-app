import {useState, useEffect} from 'react';
import {AdviceCard} from '../components/AdviceCard';

export function Home() {
  const [data, setData] = useState({
    id: '',
    advice: 'Loading advice...'
  });
  const [isInitial, setIsInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
 
  function dataFetch() {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json()
    }).then((data) => {
        setData({id: data.slip.id, advice: data.slip.advice});
        setIsLoading(false);
        setIsInitial(false);
      })
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <main>
      <AdviceCard
        data={data}
        dataFetch={dataFetch}
        isInitial={isInitial}
        isLoading={isLoading}
      />
    </main>
 )
}