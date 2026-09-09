
import { Suspense, useState } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Players from './components/Players/Players';
import type { IPlayer } from './Types/type';

const PlayerFetch = async ():Promise<IPlayer[]> => {
  const res = await fetch('/public/data.json');
  const data = await res.json();
  return data;
};



function App() {
  const [PlayerPromise] = useState(()=>PlayerFetch())
  const [coin, setCoin] = useState(3000)
  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players
          coin={coin}
          setCoin={setCoin}
          PlayerPromise={PlayerPromise}
        />
      </Suspense>
    </>
  );
}

export default App;
