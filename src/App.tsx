
import { Suspense } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Players from './components/Players/Players';
import type { IPlayer } from './Types/type';

const PlayerPromise = async ():Promise<IPlayer[]> => {
  const res = await fetch('/public/data.json');
  const data = await res.json();
  return data;
};



function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players PlayerPromise={PlayerPromise()} />
      </Suspense>
    </>
  );
}

export default App;
