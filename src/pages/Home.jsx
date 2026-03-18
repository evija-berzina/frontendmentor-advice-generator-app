import {useState, useEffect} from 'react';
import {AdviceCard} from '../components/AdviceCard';

export function Home() {
  const [data, setData] = useState('');
 
  function dataFetch() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json()
    }).then((data) => {
        setData(data.slip.advice);
        console.log(data);
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
      />
    </main>
 )
}