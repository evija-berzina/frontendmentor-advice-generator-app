import {useState, useEffect} from 'react';
import {AdviceCard} from '../components/AdviceCard';

export function Home() {
  const [data, setData] = useState({
    id: '',
    advice: ''
  });
  const [isLoading, setIsLoading] = useState(false);
 
  function dataFetch() {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json()
    }).then((data) => {
        setIsLoading(false);
        setData({id: data.slip.id, advice: data.slip.advice});
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
        isLoading={isLoading}
      />
    </main>
 )
}