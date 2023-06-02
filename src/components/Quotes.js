import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headersList = {
          Accept: '*/*',
          'X-Api-Key': 'FXOCS/tG2JzdRhoyqGV8tQ==3JGYgTMkA2vzJo1K',
        };
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=men',
          {
            method: 'GET',
            headers: headersList,
          },
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {error ? <p>{error.message}</p> : ''}
      {isLoading ? <p>Loading...</p> : ''}
      {data.map((item) => (
        <p key={1}>
          {item.quote}
          <br />
          {' '}
          -
          {' '}
          {item.author}
        </p>
      ))}
    </>
  );
}

export default Quotes;
