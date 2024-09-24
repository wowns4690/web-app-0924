import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>API 호출 결과</h1>
      {data ? (
        <div>
          <p>메시지: {data.message}</p>
          <p>상태: {data.status}</p>
        </div>
      ) : (
        <p>로딩 중... ⏳</p>
      )}
    </div>
  );
};

export default App;
