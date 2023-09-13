import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createMongoDBDataAPI } from 'mongodb-data-api';

// init by URL Endpoint
const api = createMongoDBDataAPI({
  apiKey: 'MqlR9iNlfB7Kt17txIGUk9xf1EVzlBOuyGNOcT79GqXNGwhM2QLKaG9DatFvNwn0',
  urlEndpoint:
    'https://us-west-2.aws.data.mongodb-api.com/app/data-sealj/endpoint/data/v1/action/find',
});
api
  .find({
    dataSource: 'Cluster0',
    database: 'kittens',
    collection: 'kittens',
    projection: { _id: 0, id: 1, name: 1, image: 1, image2: 0, description: 0 },
  })
  .then((result) => {
    console.log(result.document);
  });

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-7xl font-black">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
