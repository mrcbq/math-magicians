import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headersList = {
        Accept: '*/*',
        'X-Api-Key': 'FXOCS/tG2JzdRhoyqGV8tQ==3JGYgTMkA2vzJo1K',
      };
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=success',
        {
          method: 'GET',
          headers: headersList,
        },
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
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
    </ul>
  );
}

export default Quotes;
