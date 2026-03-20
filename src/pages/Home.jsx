import {useState, useEffect} from 'react';
import {AdviceCard} from '../components/AdviceCard';
import {ErrorMessage} from '../components/ErrorMessage';

export function Home() {
  const [data, setData] = useState({
    id: '',
    advice: 'Loading advice...'
  });
  const [isInitial, setIsInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  async function dataFetch() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);

      if (!response.ok) {
        const message = `Failed to fetch advice, response status ${response.status}. Please try again.`;
        throw new Error(message);
      }

      const responseData = await response.json();
      setData({id: responseData.slip.id, advice: responseData.slip.advice});
      setIsInitial(false);
    } catch(error) {
      setError(error.message || 'Something went wrong');
      //ja nebus internets vai tikla kluda, tad zinos 'Failed to fetch'
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <main>
      {error
        ? <ErrorMessage error={error} />
        : <AdviceCard
            data={data}
            dataFetch={dataFetch}
            isInitial={isInitial}
            isLoading={isLoading}
          />
      }
    </main>
  )
}