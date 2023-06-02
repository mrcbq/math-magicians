import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
      // console.log(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {isLoading ? (
        <li>Loading...</li>
      ) : (
        <li>
          {data.map((item) => (
            <li key={item.category}>
              {item.quote}
              {' '}
              <br />
              {' '}
              -
              {' '}
              {item.author}
            </li>
          ))}
        </li>
      )}
    </ul>
  );
}

export default Quotes;
